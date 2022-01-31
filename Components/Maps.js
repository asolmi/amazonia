import { getData } from '../utils/getMaps.mjs'

class Maps extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open"})
  }

  static get observedAttributes() {
    return ["sesion"]
  }
  attributeChangedCallback(atributo, oldVal, newVal) {
    if(oldVal !== newVal) {
      this[atributo] = newVal;
    }
  } 

  getTemplate() {

    const mapas = getData()
    const sesion = mapas[this.sesion]
    const cardMap = sesion.map(mapa => `
      <div class="map-container">
        <a target="_blank" rel="noopener noreferrer" class="container-image-map" href="${mapa.source}">
          <img src="../../assets/mapas/${mapa.img_number_map}" alt="${mapa.title}"/>
        </a>
        <h2>${mapa.title}</h2>
        <div>
          <h3>${mapa.author}</h3>
          <h3>${mapa.year}</h3>
        </div>
        <a target="_blank" rel="noopener noreferrer" href="${mapa.source}">IR A FUENTE </a>
      </div>
    `).join('')

    const template = document.createElement("template");
    template.innerHTML = `
    
      <section>
        ${cardMap}
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
        :host {
          --padding-sesion: 0px;
        }

        section {
          background-color: var(--bg-container-maps);
          display: flex;
          gap: 15px;
          width: 100%;
          padding: var(--padding-sesion);
          align-items: center;

          overflow-x: scroll;
          overscroll-behavior-x: contain;
          scroll-snap-type: x proximity;
          scrollbar-color: var(--background-subtitle-color) var(--principal-background);
        }
        section::-webkit-scrollbar {
          height: 8px;
          background-color: #c4b26f;
        }
        section::-webkit-scrollbar-thumb {
          background-color: var(--principal-background);
          border-radius: 10px;
        }
        .container-image-map {
          width: 100%;
        }
        img {
          width: 100%;
        }
        .map-container {         
          height: -moz-available;
          height: fit-content;
          min-width: 300px;
          padding: 15px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          
          background-color: var(--bg-box-map);
          border-radius: 5px;
        }

        h2 {
          font-size: 1.8rem;
          line-height: 1.2;
        }
        h3 {
          font-size: 1.4rem;
          font-weight: 500;
        }
        a {
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--background-subtitle-color);
        }

        @media (max-height: 811px) {
          .map-container {
            min-width: 220px;
            gap: 8px;
          }
          h2 {
            font-size: 1.6rem;
          }
          h3 {
            font-size: 1.3rem;
            font-weight: 500;
          }
          
        }

        @media (max-width: 400px) {
          .map-container {
            scroll-snap-align: center; 
            min-width: 240px;
            gap: 5px;
          }
          h2 {
            font-size: 1.6rem;
          }
          h3 {
            font-size: 1.3rem;
            
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
customElements.define('maps-cards', Maps)