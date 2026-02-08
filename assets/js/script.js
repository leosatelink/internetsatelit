document.addEventListener("DOMContentLoaded", function() {

  const btn = document.createElement("button");

  btn.id = "backToTop";

  btn.innerHTML = `
  <svg viewBox="0 0 24 24">
    <path fill="white" d="M12 4l-8 8h5v8h6v-8h5z"/>
  </svg>
  `;

  document.body.appendChild(btn);

  window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }

  });

  btn.addEventListener("click", function() {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

});
