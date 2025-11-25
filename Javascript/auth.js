// เอา element popup มาใช้
const popup = document.getElementById("popup-notice");

// ฟังก์ชันโชว์ popup ข้อความ
function showPopup(msg) {
  if (!popup) return;             // ถ้า popup ไม่มี ก็ไม่ต้องทำไร
  popup.textContent = msg;        // ตั้งข้อความใน popup
  popup.classList.add("show");    // เพิ่ม class show เพื่อให้ popup โผล่ขึ้นมา

  setTimeout(() => {
    popup.classList.remove("show"); // เอา class ออกหลัง 2.5 วิ เพื่อให้มันหายไป
  }, 2500);
}

// ----- เปลี่ยนหน้า Login / Register -----
// เวลา user กดปุ่ม Login
loginBtn.addEventListener("click", () => {
  loginBtn.classList.add("active");        // ไฮไลท์ปุ่ม login
  registerBtn.classList.remove("active");  // เอาไฮไลท์ register ออก

  loginForm.classList.add("active");       // โชว์ฟอร์ม login
  registerForm.classList.remove("active"); // ซ่อนฟอร์ม register
});

// เวลา user กดปุ่ม Register
registerBtn.addEventListener("click", () => {
  registerBtn.classList.add("active");
  loginBtn.classList.remove("active");

  registerForm.classList.add("active");
  loginForm.classList.remove("active");
});

// ----- ฟังก์ชันล็อกอิน -----
function handleLogin() {
  const username = document.getElementById("login-username").value;

  if (!username) return showPopup("กรุณากรอกชื่อผู้ใช้");  // เช็คว่ากรอกชื่อไหม

  showPopup("ล็อกอินสำเร็จ!");            // ข้อความ popup
  localStorage.setItem("currentUser", username); // เก็บชื่อไว้ใน localStorage

  setTimeout(() => {
    window.location.href = "/Nightlife/Launch/Front.html"; // เด้งไปหน้าใหม่
  }, 500); // หน่วงนิดนึงเพื่อให้ popup เห็นก่อน
}

// ----- ฟังก์ชันสมัครสมาชิก -----
function handleRegister() {
  const username = document.getElementById("register-username").value;

  if (!username) return showPopup("กรุณากรอกชื่อผู้ใช้"); // เหมือนด้านบน

  showPopup("สมัครสมาชิกสำเร็จ!");
  localStorage.setItem("currentUser", username);

  setTimeout(() => {
    window.location.href = "/Nightlife/Launch/Front.html";
  }, 500);
}
