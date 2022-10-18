const tlTransitionAnimation = () => {
  const tlProgress = document.getElementById('tl-progress-bar__indicator');
  const tlProgressRect = tlProgress.getBoundingClientRect();

  const tlTransition = document.getElementById('tl-progress-bar__transition');
  const tlTransitionRect = tlTransition.getBoundingClientRect();

  if (tlProgressRect.bottom >= tlTransitionRect.top) {
    document.body.style.setProperty(
      '--scroll',
      tlProgressRect.bottom / tlTransitionRect.top - 0.92,
    );
  } else {
    document.body.style.setProperty('--scroll', 0);
  }
};

const navbarScroll = () => {
  let lastId;

  const navbarItems = document.querySelectorAll('.menu-items__list-item');
  const scrollItems = document.querySelectorAll('.page-section');

  let fromTop = window.scrollY + 480;

  let cur = [];

  [...scrollItems].map((item) => {
    if (item.offsetTop < fromTop) {
      cur.push(item);
    }
  });

  cur = cur[cur.length - 1];
  let id = cur ? cur.id : '';

  if (lastId !== id) {
    lastId = id;

    navbarItems.forEach((elem) => {
      elem.classList.remove('active');

      const filteredItems = [...navbarItems].filter(
        (elem) => elem.children[0].getAttribute('href') === `./#${id}`,
      );
      filteredItems[0].classList.add('active');
    });
  }
};

const resumeScroll = () => {
  let lastId;

  const resume = document.getElementById('resume');
  const menuItems = document.querySelectorAll('.resume-menu-list__item');
  const scrollItems = document.querySelectorAll('.resume-section');

  let fromTopResume = resume.offsetTop - 80;

  let cur = [];

  [...scrollItems].map((item) => {
    if (item.offsetTop < window.scrollY - fromTopResume) {
      cur.push(item);
    }
  });

  cur = cur[cur.length - 1];
  let id = cur ? cur.id : '';

  if (lastId !== id) {
    lastId = id;

    menuItems.forEach((elem) => {
      elem.classList.remove('active-resume');

      const filteredItems = [...menuItems].filter(
        (elem) => elem.children[0].getAttribute('href') === `./#${id}`,
      );
      filteredItems[0].classList.add('active-resume');
    });
  }
};

window.addEventListener(
  'scroll',
  () => {
    tlTransitionAnimation();
    navbarScroll();
    resumeScroll();
  },
  false,
);
