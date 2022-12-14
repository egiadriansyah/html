import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "",
  authDomain: "formlogin-6147d.firebaseapp.com",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("reg-btn").addEventListener('click', function(){
  document.getElementById("register-div").style.display="inline";
  document.getElementById("login-div").style.display="none";
});

document.getElementById("log-btn").addEventListener('click', function(){
  document.getElementById("register-div").style.display="none";
  document.getElementById("login-div").style.display="inline";
});

document.getElementById("login-btn").addEventListener('click', function(){
  const loginEmail = document.getElementById("login-email").value;
  const loginPassword = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  .then((userCredential) => {
    const user = userCredential.user;
    document.getElementById("result-box").style.display="inline";
    document.getElementById("login-div").style.display="none";
    document.getElementById("result").innerHTML="Welcome Back<br>"+loginEmail+"was login success";

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("result-box").style.display="inline";
    document.getElementById("login-div").style.display="none";
    document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;
  });

});

