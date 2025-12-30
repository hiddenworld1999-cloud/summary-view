/* حماية */
document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("selectstart", e => e.preventDefault());
document.addEventListener("keydown", e => {
  if (e.ctrlKey && ['c','s','p','u'].includes(e.key.toLowerCase())) {
    e.preventDefault();
  }
});

/* الاسم */
const student = sessionStorage.getItem("studentName");
if (!student) {
  window.location.href = "login.html";
}

/* Watermarks */
const text = "خاص بالطالب\n" + student;
document.getElementById("watermark-top").innerText = text;
document.getElementById("watermark-bottom").innerText = text;

/* الصور */
const viewer = document.getElementById("viewer");

/* لكل مادة نغير الاسم وعدد الصفحات */
const material = window.location.pathname.split("/").pop().split(".")[0]; 
// مثال: ethics.html -> ethics

const pagesPerMaterial = {
  "ethics": 43,
  "database": 30,
  "hr": 25,
  "entrepreneurship": 20,
  "investment": 18,
  "insurance": 22
};

const totalPages = pagesPerMaterial[material] || 0;

for (let i = 1; i <= totalPages; i++) {
  const img = document.createElement("img");
  const num = String(i).padStart(2, '0');
  img.src = `${material}-${num}.png`;
  img.alt = `صفحة ${i}`;
  viewer.appendChild(img);
}