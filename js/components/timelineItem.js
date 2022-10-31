import '/css/components/timelineItem.css';

class TimelineItem extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const date = this.getAttribute('date');
    const image = this.getAttribute('image');
    const title = this.getAttribute('title');
    const paragraph = this.getAttribute('paragraph');
    const quote = this.getAttribute('quote') || '';
    const quoteAuthor = this.getAttribute('author') || '';

    this.innerHTML = `
      <div class="tl-item">
        <div class="tl-left">
          <div class="tl-left__date">
            <h2 class="page-h2 tl-left__date-text">${date}</h2>
          </div>
        </div>

        <div class="tl-center">
          <div class="tl-center__circle"></div>
        </div>

        <div class="tl-right">
          <div class="tl-right-con">
            <div class="tl-img">
              <img
                src="${image}"
                alt="New City Temp Image"
                class="tl-img__image"
              />
            </div>

            <div class="tl-right__title">
              <h3 class="page-h3 tl-title__h3">${title}</h3>
            </div>
            <div class="tl-right__paragraph">
              <p class="page-p tl-paragraph">${paragraph}</p>
            </div>
            <div class="tl-right__quote">
              <img src="/public/icons/quote-icon.png" alt="Timeline Quote Mark" class="tl-right__quote-mark" />
              <span class="tl-right__quote-text">${quote}</span>
              <span class="tl-right__quote-author">${quoteAuthor}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('timeline-item', TimelineItem);
