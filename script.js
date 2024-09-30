// JavaScript to highlight active navigation tab on scroll
document.addEventListener("scroll", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
  
    let currentSection = "";
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 60) {
        currentSection = section.getAttribute("id");
      }
    });
  
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(currentSection)) {
        link.classList.add("active");
      }
    });
  });
  