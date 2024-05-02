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
  