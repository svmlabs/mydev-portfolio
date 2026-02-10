const form = document.getElementById("contactForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  msg.innerText = "Message sent successfully! ✅";

  form.reset();
});