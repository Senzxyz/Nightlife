// ทำงานเมื่อโหลดหน้าเสร็จ
document.addEventListener("DOMContentLoaded", () => {

  // เช็คว่ามี user ล็อกอินไหม
  const currentUser = localStorage.getItem("currentUser");

  // ถ้าไม่มี → เด้งกลับไปหน้า login ทันที
  if (!currentUser) {
    window.location.href = "/Nightlife/Launch/login.html";
    return; // หยุดการทำงานต่อ
  }

  // element ที่จะเอารายการโปรดมาแปะลง
  const favList = document.getElementById("fav-list");
  if (!favList) return; // กัน error

  // โหลด favorites ทั้งหมดของทุก user
  let allFavs = JSON.parse(localStorage.getItem("userFavorites")) || {};

  // เอาเฉพาะของ user ปัจจุบัน
  let favorites = allFavs[currentUser] || [];

const allPlaces = [
      { name: "Tube groove", img: "https://img.wongnai.com/p/1920x0/2023/12/18/136d60ddba5344a3985b90ceb69867be.jpg", link: "TubegrooveBar.html" },
      { name: "Rustyปิ่นเกล้า", img: "https://res.theconcert.com/c_thumb/ced5864cb7de05378eba8a4303d41adcc/26.jpg", link: "Rustyปิ่นเกล้าBar.html" },
      { name: "Philter room", img: "https://res.theconcert.com/c_thumb/355e321dd554b9924c16788005e9fa117/dsc_7032.jpg", link: "PhilterRoomBar.html" },
      { name: "Roof Mate", img: "https://img.salehere.co.th/p/1200x0/2024/02/05/7a0cb400c3d411eea8510d990d0f361fjpeg-xm36wxaaa7ka.jpg", link: "RoofMate.html" },
      { name: "Nuss Bar", img: "https://images.squarespace-cdn.com/content/v1/62c819a227d9d8533ee1287e/aed5db6d-646a-47c4-a33b-4a983b969aee/NSR_HIRES-009.JPG", link: "NussBar.html" },
      { name: "Muin Bangkok", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/6b/83/b7/muin-bangkok-nightclub.jpg?w=1400&h=800&s=1", link: "MuinClub.html" },
      { name: "OnxyClub", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/53/c0/ca/onyx.jpg?w=1000&h=600&s=1", link: "OnxyClub.html" },
      { name: "MuinClub", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/6b/83/b7/muin-bangkok-nightclub.jpg?w=1400&h=800&s=1", link: "MuinClub.html" },
      { name: "Sugar Club", img: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/17/02/66/00.jpg", link: "SugarClub.html" },
      { name: "Aces Nightclub", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/8a/af/ab/the-heart-of-aces-with.jpg?w=1100&h=600&s=1", link: "AcesNightclub.html" },
      { name: "Nana Plaza Bangkok", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/7a/24/05/1c-trip-to-bangkok-completely.jpg?w=1400&h=800&s=1", link: "EscapeBangkok.html" },
      { name: "Escape Bangkok", img: "https://images.hungryhub.com/uploads/restaurants/4750/photos/164973/RackMultipart20250318-136-1n7l5wj.jpg", link: "#" },
      { name: "Vertigo & Moon Bar", img: "https://www.banyantree.com/assets/2021-10/vertigo_hero-image.jpg", link: "moonbar.html" },
      { name: "Asiatique", img:"https://www.ananda.co.th/blog/thegenc/wp-content/uploads/2024/08/%E0%B8%94%E0%B8%B5%E0%B9%84%E0%B8%8B%E0%B8%99%E0%B9%8C%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%B1%E0%B8%87%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD-2024-08-11T202637.103.png" ,link:"Asiatique.html"},
      { name: "JoddFair", img:"https://res.klook.com/image/upload/activities/sunjdetyd77mj0a5h98b.jpg" ,link:"joddfair.html"},
      { name: "kaosanroad", img:"https://www.agoda.com/wp-content/uploads/2019/10/Featured-photo-Khao-San-Road-at-night.jpg" ,link:"kaosanroad.html"},
      { name: "topgolf", img:"https://siam2nite.media/L4Rs9UVflyKedLQQa9p2xAcfiBI=/1280x/smart/filters:quality(60)/magazine/stories/856/da399fa73a77bcacc1ee62b5db473667.jpg" ,link:"topgolf.html"},
      { name: "Havencocktailbar", img:"https://lh3.googleusercontent.com/p/AF1QipMmjtUPfV2UJYPmReMSne11GX_6fAFFxTJEAsrR=s1360-w1360-h1020" ,link:"Havencocktailbar.html"},
      
    
    ];
    
 // หาร้านที่ user ชอบจริง ๆ โดยเช็คจาก favorites
  const favPlaces = allPlaces.filter(p =>
    favorites.includes(p.name)
  );

  // เคลียร์ list ก่อน
  favList.innerHTML = "";

  // ถ้าไม่มีร้านในรายการโปรดเลย
  if (favPlaces.length === 0) {
    favList.innerHTML =
      "<p style='color:#fff;text-align:center;'>ยังไม่มีร้านในรายการโปรด</p>";
    return;
  }

  // วนสร้าง card ของแต่ละร้านที่ user กดใจไว้
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

    favList.appendChild(card); // แปะ card ลงหน้าเว็บ
  });
});