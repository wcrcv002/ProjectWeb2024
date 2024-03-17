<template>
  <div>
    <button @click="fetchRandomUserData">สุ่มเช็คชื่อ</button>
    <div v-if="userData">
      <p>ID: {{ userData.stdID }}</p>
      <p>Email: {{ userData.email }}</p>
      <p>Name: {{ userData.name }}</p>
      <button @click="check">เช็คชื่อ</button>
    </div>
    <div>
      <button @click="checkList">แสดงรายการการเช็คชื่อ</button>
      <div v-if="checkinData.length">
        <h2>รายการการเช็คชื่อ</h2>
        <ul>
          <li v-for="(data, index) in checkinData" :key="index">
            <p>StdID: {{ data.stdID }}</p>
            <p>Class Date: {{ data.class_date }}</p>
            <p>Room: {{ data.room }}</p>
            <p>Subject: {{ data.subject }}</p>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <button @click="addQuestion">เพิ่มคำถาม</button>
      <div v-for="(question, index) in questions" :key="index">
        <p>คำถาม: {{ question.text }}</p>
        <textarea v-model="question.text" placeholder="กรุณากรอกคำถาม"></textarea>
        <button @click="fetchStudentAnswers(index)">แสดงคำตอบทั้งหมด</button>
        <div v-if="question.answers.length">
          <h2>แสดงคำตอบ</h2>
          <ul>
            <li v-for="(answer, answerIndex) in question.answers.filter(answer => answer.questionId === question.id)" :key="answerIndex">
              <p>Student ID: {{ answer.studentID }}</p>
              <p>Answer: {{ answer.answer }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

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
      newQuestionText: ''
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
