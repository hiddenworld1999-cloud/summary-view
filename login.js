/* حماية النسخ والاختيار */
document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("selectstart", e => e.preventDefault());
document.addEventListener("keydown", e => {
  if (e.ctrlKey && ['c','s','p','u'].includes(e.key.toLowerCase())) e.preventDefault();
});

/* الأكواد + الأسماء */
const students = {
  "M3N9": "منة الله أحمد محمد",
  "A7Y2": "Hidden world",
  "H1B4": "حبيبة محمد فاروق",
  "S8K5": "سارة خالد محمد",
  "N2S7": "نجلاء سيد عبد الحميد",
  "E4F1": "إسراء فرح أحمد",
  "D6Y3": "دنيا ياسر يوسف",
  "A1M8": "آلاء مجدي سيد",
  "M9L2": "منة الله محسن محمد",
  "A5G4": "عبد الرحمن جاد الكريم"
  // ضيف باقي الطلاب هنا بنفس الشكل
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