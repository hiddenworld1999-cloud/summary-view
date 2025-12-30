// منع كليك يمين وتحديد النص
document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("selectstart", e => e.preventDefault());
document.addEventListener("keydown", e => {
  if (e.ctrlKey && ['c','s','p','u'].includes(e.key.toLowerCase())) e.preventDefault();
});

// قراءة الاسم من الرابط
const params = new URLSearchParams(window.location.search);
const student = params.get("name");

// حماية من فتح الملخص مباشرة
if(!student) {
  window.location.href = "login.html";
}

// Watermark
const wm = document.getElementById("watermark");
wm.innerText = "خاص للطالب " + student;