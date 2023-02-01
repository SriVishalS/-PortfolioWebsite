var firebaseConfig = {
  apiKey: "AIzaSyADdO9obuc0h7m0YUpUEsHqD0ttSXuznGE",
  authDomain: "portfolio-website-58799.firebaseapp.com",
  projectId: "portfolio-website-58799",
  storageBucket: "portfolio-website-58799.appspot.com",
  messagingSenderId: "231358066041",
  appId: "1:231358066041:web:cb8a8161bbea96497353a8",
  measurementId: "G-00J1N0PJW5",
};
firebase.initializeApp(firebaseConfig);
function signin() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var pass = document.getElementById("pass").value;
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, pass)
    .then(function (user) {
      console.log(user);
      window.location.href = `login.html`;
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      // ...
    });
}
