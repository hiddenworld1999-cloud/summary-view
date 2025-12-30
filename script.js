// منع كليك يمين وتحديد النص
document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("selectstart", e => e.preventDefault());
document.addEventListener("keydown", e => {
  if (e.ctrlKey && ['c','s','p','u'].includes(e.key.toLowerCase())) e.preventDefault();
});

// قراءة الاسم من الرابط
const params = new URLSearchParams(window.location.search);
const student = params.get("name");

// حماية من فتح index مباشرة
if(!student) {
  // خزّن العلم في sessionStorage قبل إعادة التوجيه
  sessionStorage.setItem('redirected', 'true');
  window.location.href = "login.html";
} else {
  // تحقق من sessionStorage لو تم التحويل مسبقًا
  sessionStorage.removeItem('redirected');
}

// Watermark
const wm = document.getElementById("watermark");
wm.innerText = "خاص للطالب " + student;