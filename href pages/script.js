let icon = document.getElementById("icon");

icon.addEventListener("click", function () {
  icon.classList.toggle("fa-times");
  icon.classList.toggle("fa-bars");
});
sendMail = () => {
  let alertSuccess = document.getElementById("success");
  let alertFail = document.getElementById("failed");
  let usrObj = {
    from_name: document.getElementById("name").value,
    email_id: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  usrObj.from_name.length > 0 &&
  usrObj.email_id.length > 0 &&
  usrObj.message.length > 0
    ? emailjs.send("service_w5utfbw", "template_jixb2bl", usrObj).then(
        function () {
          console.log("SUCCESS!");
          alertSuccess.classList.add("show");
          window.location.href = "../index.html";
          let navigate = setTimeout(navToHome, 10000);
        },
        function (error) {
          console.log("FAILED...", error);
          alertFail.classList.add("show");
        }
      )
    : alert("You Havent Filled Your  Creadentials Right");
};
var myVar;
myFunction = () => {
  myVar = setTimeout(loader, 1000);
};
loader = () => {
  document.querySelector(".loadWrapper").style.display = "none";
};
navToHome = () => {
  window.location.href = "index.html";
};
document
  .getElementById("download-button")
  .addEventListener("click", function () {
    if (
      window.matchMedia("(display-mode: standalone)").matches ||
      window.navigator.standalone === true
    ) {
      // Already installed as PWA
      return;
    }
    if (window.matchMedia("(display-mode: browser)").matches) {
      // Not installed as PWA, show install prompt
      if (
        window.confirm("Do you want to install this web app on your device?")
      ) {
        // Show the install prompt
        window.deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        window.deferredPrompt.userChoice.then(function (choiceResult) {
          if (choiceResult.outcome === "accepted") {
            console.log("User accepted the install prompt");
          } else {
            console.log("User dismissed the install prompt");
          }
          window.deferredPrompt = null;
        });
      }
    }
  });
