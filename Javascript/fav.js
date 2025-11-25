// รอให้หน้าเว็บโหลดครบก่อนค่อยเริ่มทำงาน
document.addEventListener("DOMContentLoaded", () => {

  // ดึงชื่อ user ปัจจุบันจาก localStorage
  const currentUser = localStorage.getItem("currentUser");

  // หยิบ element popup ไว้ใช้แจ้งเตือน
  const popup = document.getElementById("popup-notice");

  // ฟังก์ชันโชว์ popup
  function showPopup(msg) {
    if (!popup) return;               // กัน error ถ้า popup ไม่มี
    popup.textContent = msg;          // ใส่ข้อความลง popup
    popup.classList.add("show");      // ให้ popup เด้งขึ้นมา

    setTimeout(() => {
      popup.classList.remove("show"); // ซ่อน popup หลัง 2.5 วิ
    }, 2500);
  }

  // ถ้า user ยังไม่ login
  if (!currentUser) {
    // ให้ปุ่มกดใจทุกปุ่มแสดง popup ว่า "ต้องล็อกอินก่อน"
    document.querySelectorAll(".fav-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        showPopup("กรุณาเข้าสู่ระบบก่อนกดใจร้านนี้!");
      });
    });
    return; // จบฟังก์ชันเลย ไม่ต้องทำระบบ fav ต่อ
  }

  // -------- โหลด favorites ของ user --------
  // ดึงข้อมูลทั้งหมดของ user ทุกคน
  let allFavs = JSON.parse(localStorage.getItem("userFavorites")) || {};

  // ถ้า user นี้ยังไม่มีรายการ fav ก็ให้เป็น array ว่าง ๆ
  let favorites = allFavs[currentUser] || [];

  // เลือก container ที่มีการ์ดทั้งหมด
  const container = document.querySelector(".card-grid");

  // ฟัง event การคลิกในพื้นที่การ์ด
  container.addEventListener("click", e => {
    // เช็คว่าโดนคลิกที่ปุ่ม fav ไหม
    if (e.target.classList.contains("fav-btn")) {
      const btn = e.target;
      const name = btn.dataset.name;   // หยิบชื่อร้านจาก data-name

      if (!name) return;               // เผื่อชื่อไม่เจอ

      // ถ้าเคยกดใจแล้ว → เอาออก
      if (favorites.includes(name)) {
        favorites = favorites.filter(item => item !== name); // ลบชื่อออก
        btn.textContent = "🤍";          // เปลี่ยนเป็นหัวใจเปล่า
        btn.classList.remove("active");  // เอา class active ออก
      } 
      // ถ้ายังไม่เคยกด → เพิ่มเข้า favorites
      else {
        favorites.push(name);
        btn.textContent = "❤️";          // เปลี่ยนเป็นหัวใจแดง
        btn.classList.add("active");
      }

      // อัปเดต favorites ของ user นี้
      allFavs[currentUser] = favorites;

      // เซฟกลับลง localStorage
      localStorage.setItem("userFavorites", JSON.stringify(allFavs));
    }
  });

  // -------- ตอนโหลดหน้า: อัปเดตสถานะแต่ละปุ่ม --------
  document.querySelectorAll(".fav-btn").forEach(btn => {
    const name = btn.dataset.name;
    if (!name) return;

    // ถ้าชื่อนี้อยู่ใน favorites → ทำปุ่มให้เป็นหัวใจแดง
    if (favorites.includes(name)) {
      btn.textContent = "❤️";
      btn.classList.add("active");
    }
  });
});
