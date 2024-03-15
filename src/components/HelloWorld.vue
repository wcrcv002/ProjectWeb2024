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
  signOut(auth).then(() =>{
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
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 v-if="isSignIn">Signed In User: {{ user }}</h2>
    <br>
    <div id="logout" v-if="isSignIn">
      <button @click="handleSignOut">logout</button>
    </div>
    <br>
    <div id="content">
      <h3 v-if="isAdmin">
        <Teacher />
      </h3>
      <p v-else>
        <Student />
      </p>
    </div>
    <br>
    <div id="GoogleSignin" v-if="!isSignIn">
      <h3>Google Signin</h3>
      <button @click="handleSignIn">login</button>
    </div>
  </div>
</template>

<style scoped>
/* Your styles */
</style>
