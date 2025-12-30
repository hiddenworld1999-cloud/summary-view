// منع كليك يمين وتحديد النص ونسخ الصفحة
document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("selectstart", e => e.preventDefault());
document.addEventListener("keydown", e => {
  if (e.ctrlKey && ['c','s','p','u'].includes(e.key.toLowerCase())) {
    e.preventDefault();
  }
});

const student = sessionStorage.getItem("studentName");
if (!student) {
  window.location.href = "login.html";
}

const text = "خاص بالطالب\n" + student;

document.getElementById("watermark-top").innerText = text;
document.getElementById("watermark-bottom").innerText = text;