import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2MlJCrAu2uMQfMijfRnYGxieSxrut27M",
  authDomain: "todo-crud-32479.firebaseapp.com",
  projectId: "todo-crud-32479",
  storageBucket: "todo-crud-32479.appspot.com",
  messagingSenderId: "772523540666",
  appId: "1:772523540666:web:25fa544326c6fad2780283"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
