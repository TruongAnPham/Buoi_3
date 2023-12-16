
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5RQnS8F1Ir20D8j88bfrLMCWpoMxPzd8",
  authDomain: "spacing-things.firebaseapp.com",
  databaseURL: "https://spacing-things-default-rtdb.firebaseio.com",
  projectId: "spacing-things",
  storageBucket: "spacing-things.appspot.com",
  messagingSenderId: "820697678367",
  appId: "1:820697678367:web:e0dd1dd09ca1f2390a0b2a",
  measurementId: "G-KW75Y6B12C"
};

const MyArrowFunction = () => {
  console.log("Hello World");
}
Window.location.href = "main.js";

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

//   // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
//   // Sign up
//   const email = "user@example.com";
//   const password = "password";

//   firebase.auth().createUserWithEmailAndPassword(email, password)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       console.log('Signed up successfully:', user);
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.error('Sign up error:', errorCode, errorMessage);
//     });

//   // Sign in
//   firebase.auth().signInWithEmailAndPassword(email, password)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       console.log('Signed in successfully:', user);
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.error('Sign in error:', errorCode, errorMessage);
//     });
//   // Firestore
//   const db = firebase.firestore();
//   db.collection("users").doc("user1").set({
//     name: "John Doe",
//     age: 30
//   })
//   .then(() => {
//     console.log('Firestore data added successfully');
//   })
//   .catch((error) => {
//     console.error('Firestore error:', error);
//   });

//   // Realtime Database

//   const database = firebase.database();
//   database.ref('messages').push({
//     text: 'Hello, Firebase!'
//   })
//   .then(() => {
//     console.log('Realtime Database data added successfully');
//   })
//   .catch((error) => {
//     console.error('Realtime Database error:', error);
//   });
