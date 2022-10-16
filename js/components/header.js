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
        
          width: 100vw;
          height: 8vh;
        }
        
        #nav-bar__logo {
          display: flex;
          height: 80%;
        }
        
        #logo {
          width: 100%;
          height: 100%;
        
          border-radius: 50%;
        }
        
        ul.menu-items__list {
          list-style-type: none;
        
          display: flex;
          flex-direction: row;
          justify-content: end;
          column-gap: 32px;
        
          width: 400px;
        }

        li.menu-items__list-item {
          padding: 4px;
        }

        li.menu-items__list-item > a {
          color: white;
        }
      </style>
      <div id="nav-bar">
        <div id="nav-bar__con">
          <div id="nav-bar__logo">
            <img src="./mw-logo.png" alt="Marques Webster" id="logo" />
          </div>

          <div id="nav-bar__menu">
            <nav id="nav-bar__menu-items">
              <ul class="menu-items__list" id="menu-items__list">
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
  }
}

customElements.define('header-component', Header);
