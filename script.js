document.addEventListener("DOMContentLoaded", function () {
    const accordionHeaders = document.querySelectorAll(".accordion-header");
    const button = document.getElementById("getStartedButton");
  
    function initializeAccordion() {
      accordionHeaders.forEach((header) => {
        const img = header.querySelector("img");
        if (window.innerWidth <= 1145) {
          img.style.width = "450px";
          img.style.height = "100px";
        } else {
          img.style.width = "100px";
          img.style.height = "450px";
        }
      });
    }
  
    function handleAccordionClick(header) {
      const img = header.querySelector("img");
      const isResponsive = window.innerWidth <= 1145;
      const isExpanded = isResponsive 
        ? img.style.height === "400px"
        : img.style.width === "400px";
  
      if (isExpanded) {
        gsap.to(img, {
          width: isResponsive ? "450px" : "100px",
          height: isResponsive ? "100px" : "450px",
          duration: 1.5,
          ease: "elastic(4, .4)",
        });
      } else {
        accordionHeaders.forEach((otherHeader) => {
          const otherImg = otherHeader.querySelector("img");
          gsap.to(otherImg, {
            width: isResponsive ? "450px" : "100px",
            height: isResponsive ? "100px" : "450px",
            duration: 1.5,
            ease: "elastic(4, .4)",
          });
        });
        gsap.to(img, {
          width: isResponsive ? "450px" : "400px",
          height: isResponsive ? "400px" : "450px",
          duration: 1.5,
          ease: "elastic(4, .4)",
        });
      }
    }
  
    function setupAccordion() {
      initializeAccordion();
      accordionHeaders.forEach((header) => {
        header.removeEventListener("click", header.clickHandler);
        header.clickHandler = () => handleAccordionClick(header);
        header.addEventListener("click", header.clickHandler);
      });
    }
  
    setupAccordion();
    window.addEventListener("resize", setupAccordion);
  
    button.addEventListener("click", function () {
      window.open('https://wa.me/+6281383043028');
    });
  });