class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        #nav-bar {
          display: flex;
          padding-left: 8%;
          padding-right: 8%;
        
          position: sticky;
          top: 0;
          z-index: 10;
        
          background-color: #1670ba;
        }
        
        #nav-bar__con {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        
          width: 100%;
          height: 8vh;
        }
        
        #nav-bar__logo {
          display: flex;
          height: 40px;
          width: 40px;
        }
        
        #logo {
          width: 100%;
          height: 100%;
        
          border-radius: 50%;
        }

        #menu-selector {
          display: none;

          width: 28px;
          height: 28px;

          cursor: pointer;
        }

        #menu-selector__icon {
          width: 100%;
          height: 100%;

          filter: invert(100%);
          transform: rotate(90deg);
          transition: all 0.4s ease-out;
        }

        #menu-items__list {
          list-style-type: none;
        
          display: flex;
          flex-direction: row;
          justify-content: end;
          column-gap: 32px;

          overflow: hidden;
        }

        li.menu-items__list-item {
          padding: 4px;
        }

        li.menu-items__list-item > a {
          color: white;
        }

        @media screen and (max-width: 600px) {
          #menu-selector {
            display: flex;
          }

          #menu-items__list {
            display: none;
          }

          #menu-items__list.inactive {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            row-gap: 12px;

            width: 160px;
            height: 220px;

            padding: 8px 24px 8px 24px;

            position: absolute;
            top: 9vh;
            right: 2vw;
            z-index: 5;

            border-radius: 6px;

            border-bottom: none;

            background-color: #1670ba;

            animation: menu-slide-up 0.4s ease-out;
          }

          #menu-items__list.active {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            row-gap: 12px;

            width: 160px;
            height: 220px;

            padding: 8px 24px 8px 24px;

            position: absolute;
            top: 9vh;
            right: 2vw;
            z-index: 5;

            border-radius: 6px;

            border-bottom: none;

            background-color: #1670ba;

            animation: menu-slide-down 0.4s ease-out;
          }

          li.menu-items__list-item {
            padding: 4px;
          }
  
          li.menu-items__list-item > a {
            color: white;
          }
        }

        @keyframes menu-slide-down {
          from {
            height: 0px;
          }
          to {
            height: 220px;
          }
        }

        @keyframes menu-slide-up {
          from {
            height: 220px;
          }
          to {
            height: 0px;
          }
        }
      </style>

      <div id="nav-bar">
        <div id="nav-bar__con">
          <div id="nav-bar__logo">
            <img src="/public/mw-logo.png" alt="Marques Webster" id="logo" />
          </div>

          <div id="nav-bar__menu">
            <nav id="nav-bar__menu-items">
              <div id="menu-selector">
                <a href="" id="menu-selector__link"
                  ><img
                    src="/public/icons/right-arrow-icon.png"
                    alt="menu arrow"
                    id="menu-selector__icon"
                /></a>
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
        menuLink.preventDefault();

        const link = evt.target;

        console.log(link);

        if (link.id === 'menu-selector__icon') {
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
