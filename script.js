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
  window.location.href = "index.html";

  window.onload = function() {
    // Redirect to the home page on load
    window.location.href = "home";
};

  // Automatically enter the site after a few seconds (e.g., 3 seconds)
window.onload = function() {
  setTimeout(function() {
    document.getElementById('intro-page').style.display = 'none';
    document.getElementById('main-content').classList.remove('hidden');
  }, 4000); // 1000 milliseconds = 1 seconds
};

  