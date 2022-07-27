const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions() {
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener('click', (e) => {
      const currentBtn = document.querySelector('.active-btn');
      currentBtn.classList = currentBtn.className.replace('active-btn', '');
      e.target.classList.add('active-btn');
    });
  }

  allSections.addEventListener('click', (e) => {
    const id = e.target.dataset.id;

    if (id) {
      sectBtns.forEach((btn) => {
        btn.classList.remove('active');
      });
      //   e.target.classList.add('active');

      sections.forEach((section) => {
        section.classList.remove('active');
      });

      const element = document.getElementById(id);
      element.classList.add('active');
    }
  });

  // Toggle theme
  const themeBtn = document.querySelector('.theme-btn');

  themeBtn.addEventListener('click', () => {
    const element = document.body;
    element.classList.toggle('light-mode');

    const toggleButton = document.querySelector('.theme-icon');
    const gClef = document.querySelector('.g-clef-bg');

    if (toggleButton.classList.contains('fa-moon')) {
      toggleButton.className = toggleButton.className.replace(
        'fa-moon',
        'fa-sun'
      );
      console.log(gClef);
      gClef.src = 'img/g-clef-right-dark.svg';
    } else {
      toggleButton.className = toggleButton.className.replace(
        'fa-sun',
        'fa-moon'
      );
      gClef.src = 'img/g-clef-right-yellow.svg';
    }
  });
}

PageTransitions();
