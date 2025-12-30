// منع كليك يمين وتحديد النص ونسخ الصفحة
document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("selectstart", e => e.preventDefault());
document.addEventListener("keydown", e => {
  if (e.ctrlKey && ['c','s','p','u'].includes(e.key.toLowerCase())) {
    e.preventDefault();
  }
});

// قراءة الاسم من sessionStorage
const student = sessionStorage.getItem("studentName");

if (!student) {
  window.location.href = "login.html"; // لو محدش سجل دخول
}

const wm = document.getElementById("watermark");
if (wm) {
  wm.innerText = "خاص للطالب\n" + student;
}