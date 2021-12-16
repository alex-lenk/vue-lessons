import {createApp} from 'vue'
import App from './App.vue'
import router from './router/'
import firebase from 'firebase'
import './theme.css'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6eGUS45m8LXztoYeguGExBI_GcvsLiro",
  authDomain: "less-12.firebaseapp.com",
  databaseURL: "https://less-12-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "less-12",
  storageBucket: "less-12.appspot.com",
  messagingSenderId: "584584372958",
  appId: "1:584584372958:web:e3ee66e12de90889a6584f"
}

firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
