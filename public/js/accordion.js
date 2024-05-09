document.querySelectorAll('.accordion .accordionHeader').forEach(header => {
    header.addEventListener('click', function() {
      const accordion = header.parentElement;
      const content = accordion.querySelector('.accordionContent');
      accordion.classList.toggle('active');
      
      if (accordion.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = 0;
      }
    });
  });
  function toggleAccordion(sectionNumber) {
    var content = document.getElementById("section" + sectionNumber);
    var icon = document.getElementById("icon");
    if (content.style.display === "block") {
      content.style.display = "none";
      icon.classList.remove("rotate");
    } else {
      content.style.display = "block";
      icon.classList.add("rotate");
    }
  }