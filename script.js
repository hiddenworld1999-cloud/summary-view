document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("selectstart", e => e.preventDefault());
document.addEventListener("keydown", e => {
  if (e.ctrlKey && ['c','s','p','u'].includes(e.key.toLowerCase())) {
    e.preventDefault();
  }
});

const params = new URLSearchParams(window.location.search);
const student = params.get("name");

if (!student) {
  window.location.href = "login.html";
}

document.getElementById("watermark").innerText =
  "خاص بالطالب\n" + student;