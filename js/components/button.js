import styles from '/css/components/button.css';

class CustomButton extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const link = this.getAttribute('btn-link') || '#';
    const text = this.getAttribute('btn-text');
    const icon = this.getAttribute('btn-icon');

    this.innerHTML = `
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
