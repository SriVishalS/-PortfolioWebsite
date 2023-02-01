const firebaseConfig = {
  apiKey: "AIzaSyADdO9obuc0h7m0YUpUEsHqD0ttSXuznGE",
  authDomain: "portfolio-website-58799.firebaseapp.com",
  projectId: "portfolio-website-58799",
  storageBucket: "portfolio-website-58799.appspot.com",
  messagingSenderId: "231358066041",
  appId: "1:231358066041:web:cb8a8161bbea96497353a8",
  measurementId: "G-00J1N0PJW5",
};
firebase.initializeApp(firebaseConfig);
function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("pass").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function (user) {
      // login successful, redirect to home page
      window.location.href = `../index.html`;
    })
    .catch(function (error) {
      // login failed, display error message
      var errorCode = error.code;

      var errorMessage = error.message;
      alert(errorMessage);
    });
}
