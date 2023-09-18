import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDCuNlkdGQlaoeCSzKAQRd1YJUa3uCIQ40",
  authDomain: "next-todolist-1e874.firebaseapp.com",
  projectId: "next-todolist-1e874",
  storageBucket: "next-todolist-1e874.appspot.com",
  messagingSenderId: "648149800466",
  appId: "1:648149800466:web:fbb514753ea66ef4f26acb",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
