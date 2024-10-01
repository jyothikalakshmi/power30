
window.onload = function() {
  // Hide intro and show main content after 4 seconds
  setTimeout(function() {
    document.getElementById('intro-page').style.display = 'none';
    document.getElementById('main-content').classList.remove('hidden');
    document.querySelector('.navbar').style.display = 'block';
  }, 4000);
  document.querySelectorAll('.timeline-stage').forEach(stage => {
    stage.addEventListener('mouseover', function() {
        this.querySelector('.hidden-text').style.display = 'block';
    });

    stage.addEventListener('mouseout', function() {
        this.querySelector('.hidden-text').style.display = 'none';
    });
  });

};

