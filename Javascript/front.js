// front.js
document.addEventListener("DOMContentLoaded", () => {
  const loginBtnNav = document.getElementById("loginBtnNav");
  const currentUser = localStorage.getItem("currentUser");

  if (currentUser) {
    loginBtnNav.textContent = currentUser; // แสดงชื่อผู้ใช้
    loginBtnNav.href = "profile.html";      // ลิงก์ไปหน้าโปรไฟล์
  }
});
