document.addEventListener("DOMContentLoaded", function () {

  // cek apakah sudah ada
  if (document.getElementById("backToTop")) return;

  // buat tombol
  const btn = document.createElement("button");

  btn.id = "backToTop";

  btn.innerHTML = "↑";

  document.body.appendChild(btn);

  // tampil saat scroll
  window.addEventListener("scroll", function () {

    if (window.scrollY > 200) {
      btn.style.opacity = "1";
      btn.style.visibility = "visible";
    } else {
      btn.style.opacity = "0";
      btn.style.visibility = "hidden";
    }

  });

  // klik scroll ke atas
  btn.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

});
