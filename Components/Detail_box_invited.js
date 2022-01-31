class Detail_box_invited extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open"})
  }
  static get observedAttributes() {
    return ["url_image_invitado", "name_invitado"]
  }
  attributeChangedCallback(atributo, oldVal, newVal) {
    if(oldVal !== newVal) {
      this[atributo] = newVal;
    }
  } 

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
      <div class="invited-box">
        <img src="${this.url_image_invitado}" alt="">
        <p class="invited-name">${this.name_invitado}</p>
      </div>
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
        html {
          font-size: 10px;
        }
        body {
          font-family: 'Cormorant Garamond', serif;
        }
        a {
          color: var(--text-color-principal);
          text-decoration: none;
        }       
        .invited-box {
          display: flex;
          gap: 10px;
          align-items: center;
        }
        .invited-box img {
          width: 30px;
        }
        .invited-box .invited-name {
          font-style: italic;
          font-weight: 600;
          font-size: 2rem;
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
customElements.define('detail-box-invited', Detail_box_invited)