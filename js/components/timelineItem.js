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
      <style>
        .tl-item {
          display: grid;
          grid-template-columns: 1fr 160px 1fr;
          grid-template-rows: auto;

          width: 100%;
          min-height: 240px;

          margin-top: 8%;
          padding-top: 4%;
          padding-bottom: 4%;

          position: relative;
        }

        .tl-left {
          width: 100%;
          height: 100%;

          padding-right: 24px;

          text-align: right;

          position: relative;

          overflow: visible;
        }

        .tl-left__date {
          position: sticky;
          top: 50vh;
        }

        .tl-left__date-text {
          font-size: 6em;
          font-weight: 300;
          font-style: oblique;

          color: #1670ba;
        }

        .tl-center {
          display: flex;
          justify-content: center;

          position: relative;
        }

        .tl-center__circle {
          width: 16px;
          height: 16px;

          border-radius: 100%;

          position: sticky;
          top: 50vh;

          background-color: black;
          box-shadow: 0px 0px 0px 6px #ffffff;
        }

        .tl-right {
          display: flex;
          flex-direction: column;

          max-width: 100%;

          padding-left: 24px;
        }

        .tl-img {
          width: 100%;
          height: 240px;

          border-radius: 6px;
        }

        .tl-img__image {
          width: 100%;
          height: 100%;

          border-radius: 6px;
        }

        .tl-right__title {
          margin-top: 24px;
        }

        .tl-right__paragraph {
          margin-top: 12px;

          text-align: justify;
        }

        .tl-right__quote {
          display: flex;
          flex-direction: column;
          row-gap: 12px;
          align-items: end;
          justify-content: end;

          text-align: left;

          min-height: 100px;

          margin-top: 60px;
          padding: 4% 8%;

          position: relative;

          border-radius: 6px;

          background-color: #eee;
        }

        .tl-right__quote-mark {
          width: 52px;

          position: absolute;
          top: -24px;
          left: -8px;
        }

        .tl-right__quote-text {
          font-style: italic;
        }

        .tl-right__quote-author {
          color: #1670ba;
        }

        /* MOBILE AND TABLET */
        @media screen and (max-width: 600px) {
          .tl-item {
            display: grid;
            grid-template-columns: calc(25.5% - 15px) 30px calc(75% - 15px);
            grid-template-rows: auto;
  
            width: 100%;
            min-height: 240px;
  
            margin-top: 16%;
            padding-top: 4%;
            padding-bottom: 4%;
  
            position: relative;
          }

          .tl-left {
            text-align: center;
          }

          .tl-left__date-text {
            font-size: 3em;
          }

          .tl-right__quote {
            padding-top: 12%;
          }
        }
      </style>

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
