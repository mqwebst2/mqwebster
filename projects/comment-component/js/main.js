class CustomComment extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    const template = document
      .querySelector('#comment-template')
      .content.cloneNode(true);
    shadow.append(template);

    this.name = this.shadowRoot.querySelector('.comment-title__name');
    this.email = this.shadowRoot.querySelector('.comment-title__email');
    this.message = this.shadowRoot.querySelector('.comment-body__message');
  }

  static get observedAttributes() {
    return ['name', 'email', 'message'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;

    if (this[`${name}`]) {
      this[`${name}`].textContent = newValue;
    }
  }
}

if (customElements.get('custom-comment') === undefined) {
  customElements.define('custom-comment', CustomComment);
}
