document.addEventListener("DOMContentLoaded", function () {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    const img = header.querySelector("img");
    img.style.width = "100px";

    header.addEventListener("click", function () {
      const isVisible = window.getComputedStyle(img).width === "400px";

      if (isVisible) {
        gsap.to(img, {
          width: "100px",
          duration: 1.5,
          ease: "elastic(4, .4)",
        });
      } else {
        document.querySelectorAll(".accordion-header img").forEach((image) => {
          gsap.to(image, {
            width: "100px",
            duration: 1.5,
            ease: "elastic(4, .4)",
          });
        });
        gsap.to(img, {
          width: "400px",
          height: "450px",
          duration: 1.5,
          ease: "elastic(4, .4)",
        });
      }
    });
  });

  const button = document.getElementById("getStartedButton");
  button.addEventListener("click", function () {
    window.open('https://wa.me/+6281383043028');
  });
});
