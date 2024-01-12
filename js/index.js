document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".cartImg");

  images.forEach(function (image) {
    image.addEventListener("animationend", function () {
      image.classList.add("animation-done");
    });
  });
});
