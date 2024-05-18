document.getElementById('scrollButton').addEventListener('click', function() {
    var nextSection = document.getElementById('the-problem'); // Change to ID of next section
    nextSection.scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('scrollToSolution').addEventListener('click', function() {
    var nextSection = document.getElementById('final-solution'); // Change to ID of next section
    nextSection.scrollIntoView({ behavior: 'smooth' });
  });
  