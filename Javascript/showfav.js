document.addEventListener("DOMContentLoaded", () => {
  // --- ตัวแปรสำหรับ favorites ---
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  // --- ฟังก์ชันอัปเดตปุ่มกดใจ ---
  function updateFavButtons() {
    document.querySelectorAll(".fav-btn").forEach(btn => {
      const name = btn.dataset.name;
      if (favorites.some(fav => fav.toLowerCase() === name.toLowerCase())) {
        btn.textContent = "❤️";
        btn.classList.add("active");
      } else {
        btn.textContent = "🤍";
        btn.classList.remove("active");
      }
    });
  }

  updateFavButtons(); // อัปเดตตอนโหลดหน้า

  // --- Event delegation สำหรับกดปุ่ม ---
  document.body.addEventListener("click", e => {
    if (e.target.classList.contains("fav-btn")) {
      const btn = e.target;
      const name = btn.dataset.name;
      if (favorites.some(fav => fav.toLowerCase() === name.toLowerCase())) {
        favorites = favorites.filter(fav => fav.toLowerCase() !== name.toLowerCase());
      } else {
        favorites.push(name);
      }
      localStorage.setItem("favorites", JSON.stringify(favorites));
      updateFavButtons();
    }
  });

  // --- สำหรับหน้า favorites เท่านั้น ---
  const favList = document.getElementById("fav-list");
  if (favList) {
    const allPlaces = [
      { name: "Tube groove", img: "https://img.wongnai.com/p/1920x0/2023/12/18/136d60ddba5344a3985b90ceb69867be.jpg", link: "#" },
      { name: "Rustyปิ่นเกล้า", img: "https://res.theconcert.com/c_thumb/ced5864cb7de05378eba8a4303d41adcc/26.jpg", link: "#" },
      { name: "Philter room", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBqr--V84DQNXWufnK-A6fTn2g91nH_y7IXg&s", link: "#" },
      { name: "Roof Mate", img: "https://img.salehere.co.th/p/1200x0/2024/02/05/7a0cb400c3d411eea8510d990d0f361fjpeg-xm36wxaaa7ka.jpg", link: "#" },
      { name: "Nuss Bar", img: "https://images.squarespace-cdn.com/content/v1/62c819a227d9d8533ee1287e/aed5db6d-646a-47c4-a33b-4a983b969aee/NSR_HIRES-009.JPG", link: "#" },
      { name: "Muin Bangkok", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/6b/83/b7/muin-bangkok-nightclub.jpg?w=1400&h=800&s=1", link: "Muin.html" },
      { name: "ONYX", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/53/c0/ca/onyx.jpg?w=1000&h=600&s=1", link: "#" },
      { name: "Sugar Club bkk", img: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/17/02/66/00.jpg", link: "#" },
      { name: "Aces Nightclub", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/8a/af/ab/the-heart-of-aces-with.jpg?w=1100&h=600&s=1", link: "#" },
      { name: "Nana Plaza Bangkok", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/7a/24/05/1c-trip-to-bangkok-completely.jpg?w=1400&h=800&s=1", link: "#" },
      { name: "Escape Bangkok", img: "https://images.hungryhub.com/uploads/restaurants/4750/photos/164973/RackMultipart20250318-136-1n7l5wj.jpg", link: "#" },
      { name: "Vertigo & Moon Bar", img: "https://www.banyantree.com/assets/2021-10/vertigo_hero-image.jpg", link: "#" }
    ];

    const favPlaces = allPlaces.filter(p =>
      favorites.some(fav => fav.toLowerCase() === p.name.toLowerCase())
    );

    favList.innerHTML = "";

    if (favPlaces.length === 0) {
      favList.innerHTML = "<p style='color:#fff;text-align:center;'>ยังไม่มีร้านในรายการโปรด </p>";
    }

 favPlaces.forEach(place => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <a href="${place.link}">
      <img src="${place.img}" alt="${place.name}">
    </a>
    <div class="info">
      <h3>${place.name}</h3>
      <p>ร้านนี้อยู่ในรายการโปรดของคุณ</p>
    </div>
  `;
  favList.appendChild(card);
});                            
  }
});
