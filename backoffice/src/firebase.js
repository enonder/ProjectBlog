// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBZDlfv_AIvCU6ef68WGoTa-3nv6cehu2c',
  authDomain: 'project-blog-f21ab.firebaseapp.com',
  projectId: 'project-blog-f21ab',
  storageBucket: 'project-blog-f21ab.appspot.com',
  messagingSenderId: '865773355590',
  appId: '1:865773355590:web:49ea64d04e60c70b564047',
  measurementId: 'G-L3MWLSX5FJ',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)
