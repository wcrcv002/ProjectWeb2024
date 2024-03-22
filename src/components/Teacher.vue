<template>
  <div class="teacher-container">
    <div class="button-container">
      <v-btn @click="fetchRandomUserData" class="custom-button">สุ่มเช็คชื่อ</v-btn>
      <v-btn @click="addQuestion" class="custom-button">เพิ่มคำถาม</v-btn>
      <v-btn @click="checkList" class="custom-button">แสดงรายการการเช็คชื่อ</v-btn>
    </div>

    <div v-if="userData" class="checkin-data-box">
      <p>ID: {{ userData.stdID }}</p>
      <p>Email: {{ userData.email }}</p>
      <p>Name: {{ userData.name }}</p>
      <v-btn @click="check" class="custom-button">เช็คชื่อ</v-btn>
    </div>
    <div class="checkin-data-container" v-if="checkinData.length">
      <h2>รายการการเช็คชื่อ</h2>
      <v-card>
        <div class="checkin-grid">
          <div class="checkin-data-box" v-for="(data, index) in checkinData" :key="index">
            <p>รหัสนักศึกษา: {{ data.stdID }}</p>
            <p>เข้าเรียนเวลา: {{ formatTime(data.class_date) }}</p>
            <p>ห้อง: {{ data.room }}</p>
            <p>วิชา: {{ data.subject }}</p>
          </div>
        </div>
      </v-card>
    </div>
    <div>
      <div v-for="(question, index) in questions" :key="index">
        <p>คำถาม: {{ question.text }}</p>
        <textarea v-model="question.text" placeholder="กรุณากรอกคำถาม"></textarea>
        <v-btn variant="tonal" @click="fetchStudentAnswers(index)">แสดงคำตอบทั้งหมด</v-btn>
        <div v-if="question.answers.length">
          <h2>แสดงคำตอบ</h2>
          <ul>
            <li v-for="(answer, answerIndex) in question.answers.filter(answer => answer.questionId === question.id)"
              :key="answerIndex">
              <p>Student ID: {{ answer.studentID }}</p>
              <p>Answer: {{ answer.answer }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>


</template>
<style scoped>
.button-container {
  display: flex;
  justify-content: space-between;
  /* Distribute space evenly between buttons */
}

.custom-button {
  background-color: #7979796e;
  /* Green */
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.custom-button:hover {
  background-color: #4e4e4e;
  /* Darker Green */
}

.button-container {
  display: flex;
}

.button-container v-btn:not(:last-child) {
  margin-bottom: 10dp;
  margin-right: 20px;
  /* Adjust as needed */
}



.teacher-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #4e4e4e;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.user-data-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.user-data-box {
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.checkin-data-container {
  margin-top: 20px;
}

.checkin-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.checkin-data-box {
  background-color: #3f3f3f;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>

<script>
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { addDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';

import firebaseConfig from '@/firebaseConfig';

export default {
  name: 'HelloWorld',
  data() {
    return {
      userData: null,
      checkinData: [],
      questions: [],
      newQuestionText: '',
      userDataVisible: false,
      checkinDataVisible: false,
      questionVisible: false
    };
  },
  methods: {
    async fetchRandomUserData() {
      try {
        const db = getFirestore();
        const querySnapshot = await getDocs(collection(db, 'students'));
        const documents = [];
        querySnapshot.forEach(doc => {
          documents.push({ id: doc.id, stdID: doc.data().stdID, email: doc.data().email, name: doc.data().name });
        });
        const randomIndex = Math.floor(Math.random() * documents.length);
        this.userData = documents[randomIndex];
      } catch (error) {
        console.error('Error fetching random user data:', error);
      }
    },
    async check() {
      try {
        if (!this.userData || !this.userData.stdID) {
          console.error('stdID is not defined');
          return;
        }
        const db = getFirestore();
        const collectorData = {
          stdID: this.userData.stdID,
          class_date: serverTimestamp(),
          room: 'SC6969',
          subject: 'CP9999'
        };
        const docRef = await addDoc(collection(db, 'checkin'), collectorData);
        console.log('Document written with ID: ', docRef.id);
        this.collectorData = { id: docRef.id, ...collectorData };
      } catch (error) {
        console.error('Error creating new collector:', error);
      }
    }, async toggleCheckinSection() {
      this.checkinDataVisible = !this.checkinDataVisible;
      this.userDataVisible = false;
      this.questionVisible = false;
    },
    async toggleQuestionSection() {
      this.questionVisible = !this.questionVisible;
      this.userDataVisible = false;
      this.checkinDataVisible = false;
    }, formatTime(timestamp) {
      const date = new Date(timestamp.seconds * 1000); // Convert seconds to milliseconds
      const hours = ('0' + date.getHours()).slice(-2); // Get hours (with leading zero)
      const minutes = ('0' + date.getMinutes()).slice(-2); // Get minutes (with leading zero)
      return `${hours}:${minutes}`; // Format time as HH:MM
    },

    async checkList() {
      try {
        const db = getFirestore();
        const querySnapshot = await getDocs(collection(db, 'checkin'));
        const documents = [];
        querySnapshot.forEach(doc => {
          documents.push({ id: doc.id, ...doc.data() });
        });
        this.checkinData = documents;
      } catch (error) {
        console.error('Error fetching checkin data:', error);
      }
    },
    async addQuestion() {
      try {
        const db = getFirestore();
        const questionData = {
          text: this.newQuestionText,
          createdAt: serverTimestamp()
        };
        const docRef = await addDoc(collection(db, 'questions'), questionData);
        console.log('Document written with ID: ', docRef.id);
        this.questions.push({
          id: docRef.id,
          text: questionData.text,
          createdAt: questionData.createdAt,
          updatedAt: questionData.createdAt, // อัปเดตข้อมูลเวลาที่ถูกสร้างขึ้นและอัปเดตล่าสุด
          answers: []
        });
        this.newQuestionText = '';
      } catch (error) {
        console.error('Error adding question:', error);
      }
    },
    async fetchStudentAnswers(questionIndex) {
      try {
        const db = getFirestore();
        const querySnapshot = await getDocs(collection(db, 'answers'));
        const documents = [];
        querySnapshot.forEach(doc => {
          documents.push({ id: doc.id, ...doc.data() });
        });
        this.questions[questionIndex].answers = documents.filter(
          answer => answer.questionId === this.questions[questionIndex].id
        );
      } catch (error) {
        console.error('Error fetching answers:', error);
      }
    }
  },
  formatDate(date) {
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }
};
</script>
