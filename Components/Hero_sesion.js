class Hero_sesion extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open"})
  }
  static get observedAttributes() {
    return ["title_sesion", "presentation_text", "url_img", ""]
  }
  attributeChangedCallback(atributo, oldVal, newVal) {
    if(oldVal !== newVal) {
      this[atributo] = newVal;
    }
  } 
  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
      <section>
          <div>
            <h1>${this.title_sesion}</h1>
            <p>${this.presentation_text}</p>
          </div>   
          <figure>
            <img src="${this.url_img}" />              
          </figure>           
      </section>
      ${this.getStyles()}
    `
    return template
  }
  getStyles() {
    return `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          --display-image: block;
          --font-size-p: 2rem;
          --font-size-title: 4rem;
          --title-align: start;
          --text-align-p: justify;
        }
        section {
          background-color: var(--principal-background);
          display: flex;
          width: 100%;
          padding: var(--padding-sesion);
          gap: 35px;
        }
        h1 {
          font-size: var(--font-size-title);
          line-height: 1;
          text-align: var(--title-align);
          margin-bottom: 20px;
        }
        p {
          font-size: var(--font-size-p);
          line-height: 2.6rem;
          font-weight: 500;
          text-align: var(--text-align-p);
          color: black;
        }
        figure {
          display: var(--display-image);
        }
        img {
          min-height: 260px;
        }
      </style>
    `
  }
  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
  }

  // conecta con el HTML
  connectedCallback() {
    this.render()
  }
}
customElements.define('hero-sesion', Hero_sesion)