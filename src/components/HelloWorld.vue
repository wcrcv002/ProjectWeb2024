<script setup>
import Teacher from './Teacher.vue'
import Student from './Student.vue';
import { ref, onMounted } from 'vue';
import firebaseConfig from '@/firebaseConfig';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';

const auth = getAuth();
const provider = new GoogleAuthProvider();
const user = ref('');
const isSignIn = ref(false);
const isAdmin = ref(false);

const handleSignIn = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      user.value = result.user.displayName;
      isSignIn.value = true;
      // Check if user is admin
      isAdmin.value = result.user.email === 'watsayot.p@kkumail.com'; // Replace with your admin email
      // Save authentication status to browser storage
      localStorage.setItem('user', JSON.stringify(user.value));
      localStorage.setItem('isSignIn', JSON.stringify(isSignIn.value));
      localStorage.setItem('isAdmin', JSON.stringify(isAdmin.value));
    }).catch((error) => {
      console.log(error)
    });
};

const handleSignOut = () => {
  signOut(auth).then(() => {
    user.value = '';
    isSignIn.value = false;
    isAdmin.value = false;
    // Clear authentication status from browser storage
    localStorage.removeItem('user');
    localStorage.removeItem('isSignIn');
    localStorage.removeItem('isAdmin');
  }).catch((error) => {
    console.log(error)
  });
};

onMounted(() => {
  const savedUser = localStorage.getItem('user');
  const savedIsSignIn = localStorage.getItem('isSignIn');
  const savedIsAdmin = localStorage.getItem('isAdmin');

  if (savedUser && savedIsSignIn && savedIsAdmin) {
    user.value = JSON.parse(savedUser);
    isSignIn.value = JSON.parse(savedIsSignIn);
    isAdmin.value = JSON.parse(savedIsAdmin);
  }
});
</script>

<template>
  <div>
    <header>
      <h3 v-if="isAdmin">
        <h2 v-if="isSignIn">{{ user }}</h2>
      </h3>
      <p v-else>
        <h2 v-if="isSignIn"> {{ user }}</h2>
      </p>
      <div class="logbutton">
        <div id="logout" v-if="isSignIn">
          <button @click="handleSignOut">logout</button>
        </div>
        <div id="GoogleSignin" v-if="!isSignIn">
          <button @click="handleSignIn">login</button>
        </div>
      </div>
    </header>
    <div class="hello">
      <h1>{{ msg }}</h1>
      <br>
      <div id="content">
        <h3 v-if="isAdmin">
          <Teacher />
        </h3>
        <p v-else v-if="isSignIn">
          <Student />
        </p>
      </div>
      <br>
    </div>
  </div>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: grey;
  /* Change the background color as needed */
  padding: 10px 20px;
  /* Adjust padding as needed */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  /* Optional: Add a shadow */
  z-index: 999;
  /* Ensure it stays above other content */
  display: flex;
  justify-content: space-between; /* Align items horizontally */
}

.logbutton {
  display: flex;
  align-items: center; /* Align items vertically */
}

.logbutton > div {
  margin-left: 10px; /* Add spacing between login/logout buttons */
}button {
  background-color:red;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 10px;
}

button:hover {
  background-color: #ff0000; /* Darker Green */
}
</style>
