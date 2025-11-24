// const loginBtn = document.getElementById("loginBtn"); 
// const registerBtn = document.getElementById("registerBtn");
// const loginForm = document.getElementById("loginForm");
// const registerForm = document.getElementById("registerForm");

// // toggle form
// loginBtn.addEventListener("click", () => {
//   loginBtn.classList.add("active");
//   registerBtn.classList.remove("active");
//   loginForm.classList.add("active");
//   registerForm.classList.remove("active");
// });

// registerBtn.addEventListener("click", () => {
//   registerBtn.classList.add("active");
//   loginBtn.classList.remove("active");
//   registerForm.classList.add("active");
//   loginForm.classList.remove("active");
// });

// // handle login
// function handleLogin() {
//   const username = document.getElementById("login-username").value;
//   if (!username) return alert("กรุณากรอกชื่อผู้ใช้");
  
//   alert("ล็อกอินสำเร็จ!");
//   localStorage.setItem("currentUser", username); // จำผู้ใช้
//   window.location.href = "/Nightlife/Launch/Front.html";
// }


// // handle register
// function handleRegister() {
//   const username = document.getElementById("register-username").value;
//   if (!username) return alert("กรุณากรอกชื่อผู้ใช้");
  
//   alert("สมัครสมาชิกสำเร็จ!");
//   localStorage.setItem("currentUser", username); // จำผู้ใช้
//   window.location.href = "/Nightlife/Launch/Front.html";
// }


const popup = document.getElementById("popup-notice");

function showPopup(msg) {
  if (!popup) return;
  popup.textContent = msg;
  popup.classList.add("show");
  setTimeout(() => {
    popup.classList.remove("show");
  }, 2500); // popup เด้ง 2.5 วินาที
}

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
  if (!username) return showPopup("กรุณากรอกชื่อผู้ใช้");
  
  showPopup("ล็อกอินสำเร็จ!");
  localStorage.setItem("currentUser", username);
  setTimeout(() => {
    window.location.href = "/Nightlife/Launch/Front.html";
  }, 500); // delay ให้ popup แสดงก่อน
}

// handle register
function handleRegister() {
  const username = document.getElementById("register-username").value;
  if (!username) return showPopup("กรุณากรอกชื่อผู้ใช้");
  
  showPopup("สมัครสมาชิกสำเร็จ!");
  localStorage.setItem("currentUser", username);
  setTimeout(() => {
    window.location.href = "/Nightlife/Launch/Front.html";
  }, 500);
}
