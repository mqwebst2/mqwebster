class CustomButton extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const link = this.getAttribute('btn-link') || '#';
    const text = this.getAttribute('btn-text');
    const icon = this.getAttribute('btn-icon');

    this.innerHTML = `
      <style>
        .custom-btn__link {
          display: flex;
          flex-direction: row;
          align-items: center;
        
          width: 40px;
          height: 40px;
        
          position: relative;
          overflow: hidden;
        
          border: 2px solid #1670ba;
          border-radius: 50px;
        
          background-color: white;
        
          transition: all 0.8s ease;
        
          cursor: pointer;
        }
        
        .custom-btn__link:hover {
          width: 160px;
        }
        
        .custom-btn__link-text {
          display: flex;
          align-items: center;
          justify-content: center;
        
          width: 120px;
        
          font-size: 1.2em;
        
          background-color: transparent;
        }
        
        .custom-btn__link-img {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        
          width: 40px;
          height: 40px;
        
          position: absolute;
          right: 0;
        
          border: 2px solid #1670ba;
          border-right: none;
          border-radius: 50px;
        
          background-color: white;
        
          transition: all 0.8s ease;
        }
        
        .custom-btn__link:hover > .custom-btn__link-img {
          transform: rotate(360deg);
        }
        
        .custom-btn__link-img--inner {
          width: 60%;
          height: 60%;
        }
      </style>

      <div class="custom-btn">
        <a href="${link}" target="_blank" rel="noopener noreferrer" class="page-btn custom-btn__link">
          <span class="custom-btn__link-text">${text}</span>
          <div class="custom-btn__link-img">
            <img
              src="${icon}"
              alt="Button Icon"
              class="custom-btn__link-img--inner"
            />
          </div>
        </a>
      </div>
    `;

    const mailtoText = 'mailto:';

    if (link.includes(mailtoText)) {
      const button = this.querySelector('.custom-btn__link');
      const buttonText = this.querySelector('.custom-btn__link-text');

      button.addEventListener('click', (evt) => {
        evt.preventDefault();

        this.link = link.replace('mailto:', '');
        navigator.clipboard.writeText(this.link);

        buttonText.textContent = 'Copied!';

        setTimeout(() => {
          buttonText.textContent = 'Email';
        }, 2000);
      });
    }
  }
}

customElements.define('custom-btn', CustomButton);
