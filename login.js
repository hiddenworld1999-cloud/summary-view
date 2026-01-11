/* حماية النسخ والاختيار */
document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("selectstart", e => e.preventDefault());
document.addEventListener("keydown", e => {
  if (e.ctrlKey && ['c','s','p','u'].includes(e.key.toLowerCase())) e.preventDefault();
});

/* الأكواد + الأسماء */
const students = {
  "M3N9": "منة الله أحمد محمد",
  "A7Y2": "Hidden world" 
};

/* التحقق من الكود */
function checkCode() {
  const code = document.getElementById("codeInput").value.trim();
  if (students[code]) {
    sessionStorage.setItem("studentName", students[code]); // حفظ الاسم
    window.location.href = "choose.html"; // انتقل للصفحة التالية
  } else {
    alert("❌ الكود غير صحيح");
  }
}