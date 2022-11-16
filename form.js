import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDTf4ecR2cyTeJ0Rw7weMUcUPKQY-hJdiE",
  authDomain: "formlogin-6147d.firebaseapp.com",
  projectId: "formlogin-6147d",
  storageBucket: "formlogin-6147d.appspot.com",
  messagingSenderId: "680064768999",
  appId: "1:680064768999:web:cdf2ec0fe4fe31319e3b42"
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

