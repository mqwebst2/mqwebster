class PortfolioItem extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const bgImage = this.getAttribute('port-bg-image');
    const title = this.getAttribute('port-title');
    const paragraph = this.getAttribute('port-paragraph');

    const link = this.getAttribute('btn-link');
    const text = this.getAttribute('btn-text');

    this.innerHTML = `
    <div
      class="portfolio-item"
      style="
        background-color: #1670ba;
        background-image: url('${bgImage}');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      "
    >
      <div class="portfolio-item__con">
        <div class="portfolio-item__title">
          <h2 class="page-h2 portfolio-item-h2">${title}</h2>
        </div>
        <div class="portfolio-item__content">
          <div class="portfolio-description">
            <p class="portfolio-paragraph">${paragraph}</p>
          </div>
          <div class="portfolio-btn">
            <custom-btn-alt
              btn-link="${link}"
              btn-text="${text}"
              btn-icon="/public/icons/right-arrow-icon.png"
            ></custom-btn-alt>
          </div>
        </div>
      </div>
    </div>
    `;

    const width = window.matchMedia('(max-width: 600px)');

    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const portfolioContent = document.querySelectorAll('.portfolio-item__con');

    for (const item of portfolioItems) {
      if (width.matches) {
        item.addEventListener('click', () => {
          portfolioContent.style.transform = 'translateY(82%)';

          item.querySelector('.portfolio-item__con').style.transform =
            'translateX(0)';
        });
      }
    }
  }
}

customElements.define('portfolio-item', PortfolioItem);
