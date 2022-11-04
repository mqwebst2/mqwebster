class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div id="nav-bar">
        <div id="nav-bar__con">
          <div id="nav-bar__logo">
            <img src="/public/mw-logo.png" alt="Marques Webster" id="logo" />
          </div>
          <div id="nav-bar__menu">
            <nav id="nav-bar__menu-items">
              <div id="menu-selector">
                <a href="javascript:;" id="menu-selector__link"
                  ><img
                    src="/public/icons/right-arrow-icon.png"
                    alt="menu arrow"
                    id="menu-selector__icon"
                />Menu</a>
              </div>
            
              <ul id="menu-items__list">
                <li class="menu-items__list-item"><a href="./#home">Home</a></li>
                <li class="menu-items__list-item"><a href="./#about">About</a></li>
                <li class="menu-items__list-item"><a href="./#resume">Resume</a></li>
                <li class="menu-items__list-item"><a href="./#portfolio">Portfolio</a></li>
                <li class="menu-items__list-item"><a href="./#contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    `;

    const width = window.matchMedia('(max-width: 600px)');

    const menuLink = document.getElementById('menu-selector__link');
    const menuIcon = document.getElementById('menu-selector__icon');
    const menuItems = document.getElementById('menu-items__list');

    const slideDown = () => {
      menuIcon.style.transform = 'rotate(270deg)';
      menuItems.classList.add('active');
    };
    const slideUp = () => {
      menuIcon.style.transform = 'rotate(90deg)';
      menuItems.classList.remove('active');
      menuItems.classList.add('inactive');
      setTimeout(() => {
        menuItems.classList.remove('inactive');
      }, 400);
    };

    if (width.matches) {
      menuItems.className = '';

      window.addEventListener('click', (evt) => {
        const link = evt.target;

        console.log(link);

        if (
          link.id === 'menu-selector__icon' ||
          link.id === 'menu-selector__link'
        ) {
          if (menuIcon.style.transform === 'rotate(270deg)') {
            slideUp();
          } else {
            slideDown();
          }
        } else {
          if (menuIcon.style.transform === 'rotate(270deg)') {
            slideUp();
          }
        }
      });
    }
  }
}

customElements.define('header-component', Header);
