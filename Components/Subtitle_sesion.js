class Subtitle_sesion extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open"})
  }

  static get observedAttributes() {
    return ["subtitle"]
  }
  attributeChangedCallback(atributo, oldVal, newVal) {
    if(oldVal !== newVal) {
      this[atributo] = newVal;
    }
  } 

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
      <div>
        <h2>
          ${this.subtitle}
        </h2>
      </div>
    
      ${this.getStyles()}
    `
    return template
  }
  getStyles() {
    return `
      <style>
        * {
          margin:0;
          padding:0;
          box-sizing: border-box;
        } 
        :host {
          --title-align: start;
          --padding-sesion: 0px 50px;
        }
        div {
          display: flex;
          align-items: center;
          height: 110px;
          background-color: var(--background-subtitle-color);
          color: white;
          padding: var(--padding-sesion);
          justify-content: var(--title-align);
        }
        h2 {
          font-size: 3.2rem;
        }
        @media (max-width: 600px) {
          div {
            height: 55px;
          }
        }
      </style>
    `
  }
  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
  }
  connectedCallback() {
    this.render()
  }
}
customElements.define('subtitle-sesion-section', Subtitle_sesion)