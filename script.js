// منع كليك يمين وتحديد النص
document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("selectstart", e => e.preventDefault());
document.addEventListener("keydown", e => {
  if (e.ctrlKey && ['c','s','p','u'].includes(e.key.toLowerCase())) {
    e.preventDefault();
  }
});

// قراءة الاسم من اللينك
const params = new URLSearchParams(window.location.search);
const student = params.get("name");

if (!student) {
  window.location.href = "login.html";
}

// كتابة الاسم مرة واحدة في النص
const wm = document.getElementById("watermark");
wm.innerText = "خاص بالطالب\n" + student;