
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

// document.addEventListener('DOMContentLoaded', function() {
  const questions = document.querySelectorAll('.question');

  questions.forEach((question) => {
      question.addEventListener('click', function() {
          // Toggle the open class on the question for rotating the arrow
          this.classList.toggle('open');

          // Find the next element sibling, which is the answer
          const answer = this.nextElementSibling;
          if (answer.classList.contains('hidden')) {
              answer.classList.remove('hidden');
              answer.style.display = 'block';
          } else {
              answer.classList.add('hidden');
              answer.style.display = 'none';
          }
      });
  });
  

