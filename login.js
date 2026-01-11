/* حماية النسخ والاختيار */
document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("selectstart", e => e.preventDefault());
document.addEventListener("keydown", e => {
  if (e.ctrlKey && ['c','s','p','u'].includes(e.key.toLowerCase())) e.preventDefault();
});

// الأكواد + الأسماء
const students = {
      "M3N9": "منة الله أحمد محمد",
  "A7Y2": "Hidden world"
};

function checkCode() {
  const code = document.getElementById("codeInput").value.trim();
  if (students[code]) {
    // حفظ الاسم في sessionStorage لاستخدامه في الصفحات الأخرى
    sessionStorage.setItem("studentName", students[code]);
    window.location.href = "choose.html?name=" + encodeURIComponent(students[code]);
  } else {
    alert("❌ الكود غير صحيح");
  }
}