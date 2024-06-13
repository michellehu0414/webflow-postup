// Function to toggle accordion state
function toggleAccordion(button) {
  const content = button.querySelector('.accordion__content');
  const icon = button.querySelector('.accordion__icon');

  content.classList.toggle('active');
  icon.classList.toggle('rotate');

  if (content.classList.contains('active')) {
    content.style.maxHeight = content.scrollHeight + 'px';
  } else {
    content.style.maxHeight = 0;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Attach click event listeners to all accordion headers
  document.querySelectorAll('.accordion').forEach(accordion => {
    accordion.addEventListener('click', function () {
      toggleAccordion(this);
    });
  });
});
