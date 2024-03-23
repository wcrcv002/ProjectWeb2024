<template>
    <div class="check-in-form">
      <h2>เช็คชื่อ</h2>
      <form @submit.prevent="submitForm" class="form">
        <div class="form-group">
          <label for="studentName">ชื่อ:</label>
          <input type="text" id="name" v-model="studentName" required>
        </div>
        <div class="form-group">
          <label for="studentID">รหัสนักศึกษา:</label>
          <input type="text" id="stdID" v-model="studentID" required>
        </div>
        <div class="form-group">
          <label for="section">Section:</label>
          <input type="text" id="section" v-model="section" required>
        </div>
        <button type="submit">เช็คชื่อ</button>
      </form>
      <div v-if="checkedIn" class="confirmation">
        <p>{{ studentName }} ได้ทำการเช็คชื่อเรียบร้อยแล้วใน Section {{ section }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import firebaseConfig from '@/../src/firebaseConfig.js';
  import { getFirestore, collection, addDoc } from 'firebase/firestore';
  
  firebaseConfig
  export default {
    data() {
      return {
        studentName: '',
        studentID: '',
        section: '',
        checkedIn: false
      }
    },
    methods: {
      async submitForm() {
        try {
          const db = getFirestore();
          const checkinsCollection = collection(db, 'checkin');
  
          const checkinData = {
            name: this.studentName,
            stdID: this.studentID,
            section: this.section,
            checkedIn: true
          };
  
          await addDoc(checkinsCollection, checkinData);
          console.log('ข้อมูลถูกบันทึกเรียบร้อยแล้วใน Firebase');
          this.checkedIn = true;
        } catch (error) {
          console.error('เกิดข้อผิดพลาดในการบันทึกข้อมูล:', error);
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .check-in-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .form {
    display: flex;
    flex-direction: column;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    font-weight: bold;
  }
  
  input[type="text"] {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }.confirmation p {
    color: black;
    text-align: center;
}

  
  .confirmation {
    margin-top: 20px;
    padding: 10px;
    background-color: #f0f0f0;
    border-radius: 4px;
  }
  </style>
  