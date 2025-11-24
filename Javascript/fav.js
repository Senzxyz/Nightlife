document.addEventListener("DOMContentLoaded", () => {
  const currentUser = localStorage.getItem("currentUser");
  const popup = document.getElementById("popup-notice");

  function showPopup(msg) {
    if (!popup) return;
    popup.textContent = msg;
    popup.classList.add("show");
    setTimeout(() => {
      popup.classList.remove("show");
    }, 2500); // popup เด้ง 2.5 วินาที
  }

  if (!currentUser) {
    document.querySelectorAll(".fav-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        showPopup("กรุณาเข้าสู่ระบบก่อนกดใจร้านนี้!");
      });
    });
    return;
  }

  // โหลด favorites ของ user
  let allFavs = JSON.parse(localStorage.getItem("userFavorites")) || {};
  let favorites = allFavs[currentUser] || [];
  const container = document.querySelector(".card-grid");

  container.addEventListener("click", e => {
    if (e.target.classList.contains("fav-btn")) {
      const btn = e.target;
      const name = btn.dataset.name;
      if (!name) return;

      if (favorites.includes(name)) {
        favorites = favorites.filter(item => item !== name);
        btn.textContent = "🤍";
        btn.classList.remove("active");
      } else {
        favorites.push(name);
        btn.textContent = "❤️";
        btn.classList.add("active");
      }

      allFavs[currentUser] = favorites;
      localStorage.setItem("userFavorites", JSON.stringify(allFavs));
    }
  });

  // ตอนโหลดหน้า: update ปุ่มทุกอัน
  document.querySelectorAll(".fav-btn").forEach(btn => {
    const name = btn.dataset.name;
    if (!name) return;
    if (favorites.includes(name)) {
      btn.textContent = "❤️";
      btn.classList.add("active");
    }
  });
});
