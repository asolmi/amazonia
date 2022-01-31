class Card_home extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open"})

    // this.urlImageInvitado = this.getAttribute("urlImageInvitado")
    // this.nameInvitado = this.getAttribute("nameInvitado")
  }
  static get observedAttributes() {
    return ["url_sesion", "url_image_sesion", "title", "name_monitor"]
  }
  attributeChangedCallback(atributo, oldVal, newVal) {
    if(oldVal !== newVal) {
      this[atributo] = newVal;
    }
  } 
  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
      <a class="link-card" href="${this.url_sesion}">
        <div class="card-box">
          <div class="sesion-image">
            <img src="${this.url_image_sesion}" alt="">
          </div>
          <h2>
            ${this.title}
          </h2>
          <div class="guests-container">
            <slot name="invited_container"></slot>
          </div>
          <div class="monitor-name">
            <p>Monitor: ${this.name_monitor}</p>
          </div>
        </div>
      </a>
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
        a {
          color: var(--text-color-principal);
          text-decoration: none;

          
        }    
        .card-box {
          width: 100%;
          min-height: 200px;
          min-width: 250px;
          background-color: var(--principal-background);
          padding: 10px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          
          border-radius: 5px;
        
          margin-bottom: 25px;         
          overflow: auto;
        }
        .link-card .card-box:hover {
          background-color: #fffaf2;
        }
        .card-box .sesion-image {
          height: 100%;
        }
        .card-box .sesion-image img {
          width: 100%;
        }
        .card-box h2 {
          font-size: 2.2rem;
          line-height: 1.2;
        } 
        .card-box .guests-container {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .card-box .monitor-name {
          font-weight: 600;
          font-size: 1.8rem;
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
customElements.define('card-home', Card_home)