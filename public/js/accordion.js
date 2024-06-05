document.querySelectorAll('.accordion .accordion__header').forEach(header => {
  header.addEventListener('click', function () {
    const accordion = header.parentElement;
    const content = accordion.querySelector('.accordion__content');
    const icon = accordion.querySelector('.accordion__icon'); // Select the icon within the accordion

    content.classList.toggle('active');
    icon.classList.toggle('rotate');

    if (content.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = 0;
    }
  });
});

function toggleAccordion(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector('.accordion__icon');

  content.classList.toggle('active');
  icon.classList.toggle('rotate');

  if (content.classList.contains('active')) {
    content.style.maxHeight = content.scrollHeight + 'px';
  } else {
    content.style.maxHeight = 0;
  }
}
