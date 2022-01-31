
class Moderador_sesion_container extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open"})
  }

  static get observedAttributes() {
    return ["nombre_moderador", "nombre_universidad", "description"]
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
          <h3>Moderador</h3>
          <h2>${this.nombre_moderador}</h2>
          <h4>${this.nombre_universidad}</h4>
        </div>
        <p>${this.description}</p>
      </section>
    
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
        :host{ 
          --font-size-p: 2rem;
          --text-align-p: justify;
          --title-align: start;
        }
        section {
          background-color: var(--bg-moderador-box);
          padding: var(--padding-sesion);
        }
        h3 {
          text-align: var(--title-align);
          font-size: 2rem;
        }
        h2 {
          text-align: var(--title-align);
          font-size: 2.6rem;
          font-weight: 600;
          margin: 10px 0 10px 0;
        }
        h4 {
          text-align: var(--title-align);
          font-size: 2.4rem;
          font-style: italic;
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
          display: flex;
        }
        img {
          width: 250px;
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
customElements.define('moderador-sesion-container', Moderador_sesion_container)