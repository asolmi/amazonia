
class Invitado_sesion_container extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open"})
  }

  static get observedAttributes() {
    return ["nombre_invitado", "nombre_universidad", "description", "url_img"]
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
          <h2>${this.nombre_invitado}</h2>
          <h3>${this.nombre_universidad}</h3>
          <p>${this.description}</p>
        </div>
        <figure>
          <img src="${this.url_img}" alt="${this.nombre_invitado}"/>
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
          margin:0;
          padding:0;
          box-sizing: border-box;
        } 
        section {
          width: 100%;
          display: flex;
          gap: 50px;
          align-items: center;
          background-color: var(--background-invited-box);
          padding: var(--padding-sesion);
        }
        :host {
          --font-size-p: 2rem;
          --text-align-p: justify;
        }
        h2 {
          font-size: 4rem;
          font-weight: bold;
          margin-bottom: 10px;
        }
        h3 {
          font-weight: 500;
          text-align: start;
          line-height: 1.2;
          font-size: 3.4rem;
          font-style: italic;
          margin-bottom: 25px;
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

        @media (max-width: 768px) {
          section {
            flex-direction: column;
            gap: 30px;
          }
          figure {
            order: 1;
          }
          div {
            order: 2;
          }
        }
        @media (max-width: 600px) {
          section {
            gap: 10px;
          }
          img {
            width: 170px;
          }
          h2, h3, p {
            text-align: var(--font-size-p);
          }
          h3 {
            font-size: 2.4rem;
          }
          p {
            font-size: var(--font-size-p);
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
customElements.define('invitado-sesion-container', Invitado_sesion_container)