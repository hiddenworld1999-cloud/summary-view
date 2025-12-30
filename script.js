// منع كليك يمين وتحديد النص ونسخ/حفظ/طباعة
document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("selectstart", e => e.preventDefault());
document.addEventListener("keydown", e => {
  if (e.ctrlKey && ['c','s','p','u'].includes(e.key.toLowerCase())) e.preventDefault();
});

// قراءة اسم الطالب من الرابط
const params = new URLSearchParams(window.location.search);
const student = params.get("name") || "طالب غير معروف";

// Watermark في منتصف الصفحة
const wm = document.getElementById("watermark");
if (wm) {
  wm.innerText = "خاص للطالب " + student;
  wm.style.position = "fixed";
  wm.style.top = "50%";
  wm.style.left = "50%";
  wm.style.transform = "translate(-50%, -50%) rotate(-30deg)";
  wm.style.fontSize = "42px";
  wm.style.color = "rgba(0,0,0,0.12)";
  wm.style.pointerEvents = "none";
  wm.style.zIndex = "9999";
}