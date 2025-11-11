const loginBtn = document.getElementById("loginBtn"); 
const registerBtn = document.getElementById("registerBtn");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

// toggle form
loginBtn.addEventListener("click", () => {
  loginBtn.classList.add("active");
  registerBtn.classList.remove("active");
  loginForm.classList.add("active");
  registerForm.classList.remove("active");
});

registerBtn.addEventListener("click", () => {
  registerBtn.classList.add("active");
  loginBtn.classList.remove("active");
  registerForm.classList.add("active");
  loginForm.classList.remove("active");
});

// handle login
function handleLogin() {
  const username = document.getElementById("login-username").value;
  if (!username) return alert("กรุณากรอกชื่อผู้ใช้");
  
  alert("ล็อกอินสำเร็จ!");
  localStorage.setItem("currentUser", username); // จำผู้ใช้
  window.location.href = "/Nightlife/Launch/Front.html";
}

// handle register
function handleRegister() {
  const username = document.getElementById("register-username").value;
  if (!username) return alert("กรุณากรอกชื่อผู้ใช้");
  
  alert("สมัครสมาชิกสำเร็จ!");
  localStorage.setItem("currentUser", username); // จำผู้ใช้
  window.location.href = "/Nightlife/Launch/Front.html";
}
