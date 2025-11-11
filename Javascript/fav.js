document.addEventListener("DOMContentLoaded", () => {
  const currentUser = localStorage.getItem("currentUser"); // ใครล็อกอินอยู่
  if (!currentUser) {
    // ถ้าไม่ล็อกอิน disable ปุ่มกดใจ
    document.querySelectorAll(".fav-btn").forEach(btn => {
      btn.disabled = true;
      btn.title = "ล็อกอินก่อนกดใจร้านนี้";
    });
    return; // ออก
  }

    // ถ้าไม่ล็อกอิน ให้แจ้งเตือนเวลากดใจ
  if (!currentUser) {
    document.querySelectorAll(".fav-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        alert("กรุณาเข้าสู่ระบบก่อนกดใจร้านนี้!");
      });
    });
    return; // ออกจากฟังก์ชัน ไม่ต้องโหลด favorites
  }

  // โหลด favorites ของ user นี้
  let allFavs = JSON.parse(localStorage.getItem("userFavorites")) || {};
  let favorites = allFavs[currentUser] || [];

  const container = document.querySelector(".card-grid");

  container.addEventListener("click", e => {
    if (e.target.classList.contains("fav-btn")) {
      const btn = e.target;
      const name = btn.dataset.name;

      if (favorites.includes(name)) {
        favorites = favorites.filter(item => item !== name);
        btn.textContent = "🤍";
        btn.classList.remove("active");
      } else {
        favorites.push(name);
        btn.textContent = "❤️";
        btn.classList.add("active");
      }

      // อัปเดต localStorage สำหรับ user นี้
      allFavs[currentUser] = favorites;
      localStorage.setItem("userFavorites", JSON.stringify(allFavs));
    }
  });

  // ตอนโหลดหน้า: update ปุ่มทุกอัน
  document.querySelectorAll(".fav-btn").forEach(btn => {
    const name = btn.dataset.name;
    if (favorites.includes(name)) {
      btn.textContent = "❤️";
      btn.classList.add("active");
    }
  });
});
