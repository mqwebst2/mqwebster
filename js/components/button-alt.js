class CustomButtonAlt extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const link = this.getAttribute('btn-link') || '#';
    const text = this.getAttribute('btn-text');
    const icon = this.getAttribute('btn-icon');

    this.innerHTML = `
      <div class="custom-btn-alt">
        <a href="${link}" target="_blank" rel="noopener noreferrer" class="page-btn-alt custom-btn-alt__link">
          <span class="custom-btn-alt__link-text">${text}</span>
          <div class="custom-btn-alt__link-img">
            <img
              src="${icon}"
              alt="Button Icon"
              class="custom-btn-alt__link-img--inner"
            />
          </div>
        </a>
      </div>
    `;
  }
}

customElements.define('custom-btn-alt', CustomButtonAlt);
