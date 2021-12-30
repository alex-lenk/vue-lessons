import {createApp} from 'vue'
import App from './App.vue'
import router from './router/'
import './theme.css'

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyARsrdN2rfYUgLBaLIj6Ec21d2zqOn4HRQ",
  authDomain: "test-12-b04b0.firebaseapp.com",
  projectId: "test-12-b04b0",
  storageBucket: "test-12-b04b0.appspot.com",
  messagingSenderId: "422542919383",
  appId: "1:422542919383:web:40e90c6833911177ac1292"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
