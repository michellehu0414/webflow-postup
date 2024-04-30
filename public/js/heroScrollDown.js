document.getElementById('scrollButton').addEventListener('click', function() {
    var nextSection = document.getElementById('section-intro'); // Change to ID of next section
    nextSection.scrollIntoView({ behavior: 'smooth' });
  });
  