document.addEventListener("DOMContentLoaded", () => {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  // event delegation: ฟังคลิกที่ container
  const container = document.querySelector(".card-grid");
  container.addEventListener("click", e => {
    if (e.target.classList.contains("fav-btn")) {
      const btn = e.target;
      const name = btn.dataset.name;

      if (favorites.includes(name)) {
        // ลบออก
        favorites = favorites.filter(item => item !== name);
        btn.textContent = "🤍";
        btn.classList.remove("active");
      } else {
        // เพิ่มเข้า favorites
        favorites.push(name);
        btn.textContent = "❤️";
        btn.classList.add("active");
      }

      localStorage.setItem("favorites", JSON.stringify(favorites));
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
