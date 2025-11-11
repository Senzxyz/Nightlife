// front.js
document.addEventListener("DOMContentLoaded", () => {
  const loginBtnNav = document.getElementById("loginBtnNav");
  const currentUser = localStorage.getItem("currentUser");

  if (currentUser) {
    loginBtnNav.textContent = currentUser; // แสดงชื่อผู้ใช้
    loginBtnNav.href = "/Nightlife/Launch/profile.html";      // ลิงก์ไปหน้าโปรไฟล์
  }
});

// const bgHead = document.getElementById(`bgHead`)

// bgHead.addEventListener(`click`,function(){
//       bgHead.style.backgroundColor = "#fff";
// });