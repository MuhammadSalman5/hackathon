const firebaseConfig = {
  apiKey: "AIzaSyBzy0v3jf2AM-wS-UJ8zyYx_CmWpXOWo7Y",
  authDomain: "hakathaton.firebaseapp.com",
  projectId: "hakathaton",
  storageBucket: "hakathaton.appspot.com",
  messagingSenderId: "752417298681",
  appId: "1:752417298681:web:76b2bf45a130616770aa28",
  measurementId: "G-SZ7YS5QW7Z"
  };
  firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
      location.replace("index.html");
    } else {
  document.getElementById("user").innerHTML= "Hello, "+ user.email;
  console.log(useremail);
    }
  });

function logout(){
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}