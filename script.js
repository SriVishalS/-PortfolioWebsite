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
        },
        function (error) {
          console.log("FAILED...", error);
          alertFail.classList.add("show");
        }
      )
    : alert("You Havent Filled Your Login Creadentials Right");
};
var myVar;
myFunction = () => {
  myVar = setTimeout(loader, 1000);
};
loader = () => {
  document.querySelector(".loadWrapper").style.display = "none";
};
