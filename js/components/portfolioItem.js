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
    <style>
      .portfolio-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: end;
        overflow: hidden;
      
        height: 400px;
      
        border-radius: 6px;
      }
      
      .portfolio-item__con {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        row-gap: 4%;
      
        width: 100%;
        height: 100%;
      
        border-radius: 6px 6px 0 0;
      
        padding: 4%;
      
        text-align: center;
      
        position: relative;
      
        background: linear-gradient(#ffffffdd, #ffffff);
      
        transform: translateY(82%);
        transition: all 0.8s ease-in-out;
      }
      
      .portfolio-item:hover > .portfolio-item__con {
        transform: translateY(0);
      }
      
      .portfolio-item__title {
        position: absolute;
        top: 0;
      
        width: 100#;
        height: 30%;
      
        padding-top: 4%;
        padding-left: 4%;
        padding-right: 4%;
      }
      
      .portfolio-item__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
      
        padding-left: 12%;
        padding-right: 12%;
      }

      .portfolio-btn {
        margin-top: 6%;

        position: absolute;
        bottom: 12%;
      }
    </style>
    
    <div
      class="portfolio-item"
      style="
        background-color: red;
        background-image: url('${bgImage}');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      "
    >
      <div class="portfolio-item__con">
        <div class="portfolio-item__title">
          <h2 class="page-h2">${title}</h2>
        </div>
        <div class="portfolio-item__content">
          <div class="portfolio-description">
            <p class="portfolio-paragraph">${paragraph}</p>
          </div>
          <div class="portfolio-btn">
            <custom-btn-alt
              btn-link="${link}"
              btn-text="${text}"
              btn-icon="./icons/right-arrow-icon.png"
            ></custom-btn-alt>
          </div>
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define('portfolio-item', PortfolioItem);
