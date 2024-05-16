document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');
  const tabsMenu = document.querySelector('.tabs-menu'); // Add this line

  tabButtons.forEach(button => {
    button.addEventListener('click', function () {
      const targetTab = this.getAttribute('data-tab');
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => {
        if (content.id === targetTab) {
          content.classList.add('active');
        } else {
          content.classList.remove('active');
        }
      });
      this.classList.add('active');

      // Calculate the offsetLeft of the clicked tab button and adjust the tabsMenu scrollLeft
      const offsetLeft = this.offsetLeft;
      tabsMenu.scrollLeft = offsetLeft - tabsMenu.offsetWidth / 4;
    });
  });
});
