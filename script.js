const student = sessionStorage.getItem("studentName");
if (!student) {
  window.location.href = "login.html";
}

const text = "خاص بالطالب\n" + student;
document.getElementById("watermark-top").innerText = text;
document.getElementById("watermark-bottom").innerText = text;