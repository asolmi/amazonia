class Header_amz_phone extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open"})
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
      <header>
        <div class="header-phone-container">
          <div class="logo-phone-container">
            <a href="../../"> 
              <img class="logo-phone" src="../../assets/general/Amazonia_cartografica.png" alt="amazonia cartografica logo">
            </a>
          </div>
          
          <nav>
            <label for="btn">
              <svg width="30" height="20" viewBox="0 0 16 15" class="burger-icon">
                <line  x1="0.75" y1="1.41666" x2="15.25" y2="1.41666" stroke="black" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round"/>
                <line x1="0.75" y1="7.75" x2="15.25" y2="7.75" stroke="black" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round"/>
                <line x1="0.75" y1="14.0833" x2="15.25" y2="14.0833" stroke="black" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </label>
            <input type="checkbox" id="btn">

            <ul class="menu">
              <h2>NOSOTROS</h2>
              <li>
                <a href="../../pages/info">
                  <div class="menu-card-container">
                    <div class="img-info-menu-container"></div>
                    <span>Información del proyecto Amazonia cartográfica</span>
                  </div> 
                </a>
              </li>
              <h2>SESIONES</h2>
              <li>
                <a href="../../pages/8-las-amazonas-nacionales-construyendo-espacios-estatales">
                  <div class="menu-card-container">
                    <img src="../../assets/sesiones/02.jpg" alt="">
                    <span>La cartografía histórica, alcances y limitaciones</span>
                  </div> 
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="menu-card-container">
                    <img src="../../assets/sesiones/03.jpg" alt="">
                    <span>Imaginar, medir y representar el territorio ignoto</span>
                  </div> 
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="menu-card-container">
                    <img src="../../assets/sesiones/04.jpg" alt="">
                    <span>De los monstruos marinos a las monstruosidades ribereñas</span>
                  </div> 
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="menu-card-container">
                    <img src="../../assets/sesiones/05.jpg" alt="">
                    <span>Mitos, materiales y mundos de la cartografía Amazónica</span>
                  </div> 
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="menu-card-container">
                    <img src="../../assets/sesiones/06.jpg" alt="">
                    <span>La disputa imperial y el control del espacio amazónico</span>
                  </div> 
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="menu-card-container">
                    <img src="../../assets/sesiones/07.jpg" alt="">
                    <span>El ojo científico sobre la Amazonía</span>
                  </div> 
                </a>
              </li>
              <li>
                <a href="../../pages/8-las-amazonas-nacionales-construyendo-espacios-estatales">
                  <div class="menu-card-container">
                    <img src="../../assets/sesiones/08.jpg" alt="">
                    <span>Las Amazonas nacionales construyendo espacios estatales</span>
                  </div> 
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="menu-card-container">
                    <img src="../../assets/sesiones/09.jpg" alt="">
                    <span>Encuentros cartográficos y demarcación de fronteras en la Amazonía</span>
                  </div> 
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="menu-card-container">
                    <img src="../../assets/sesiones/11.jpg" alt="">
                    <span>Representación indígena del espacio amazónico</span>
                  </div> 
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="menu-card-container">
                    <img src="../../assets/sesiones/12.jpg" alt="">
                    <span>Cercas, presas y otras infraestructuras la Amazonia</span>
                  </div> 
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="menu-card-container">
                    <img src="../../assets/sesiones/13.jpg" alt="">
                    <span>Luchando por la tierra resistencias y militancias cartográficas</span>
                  </div> 
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="menu-card-container">
                    <img src="../../assets/sesiones/14.jpg" alt="">
                    <span>La Amazonia urbanizada</span>
                  </div> 
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="menu-card-container">
                    <img src="../../assets/sesiones/15.jpg" alt="">
                    <span>Literatura, Amazonia y cartografía</span>
                  </div> 
                </a>
              </li>
              
            </ul>
          </nav>


        </div>
      </header>
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

        header {
          display: flex;
          width: 100%;
          align-items: center;
          position: fixed;
          z-index: 10;
    
          background-image: url(../../assets/general/Vintage_Paper_19.jpg);
          background-position: top;
          background-repeat: no-repeat;
          background-size: cover;
    
        }
        .header-phone-container {
          display: flex;
          align-items: center;
          width: 100%;
          padding: 0 20px;
          height: 80px;
        }
        .logo-phone-container {
          position: relative;
          z-index: 10;
        }
        .logo-phone {
          width: 160px;
        }
        nav {
          background-color: var(--principal-background);
          display: flex;
          width: 100%;
          flex-direction: column;
          
        }
        nav label {
          position: absolute;
          z-index: 2;
          top: 30px;
          align-self: flex-end;
          display: block;
          cursor: pointer;
        }
        .burger-icon line {
          stroke-opacity: 0.55;
          stroke-width: 2;
        }
        nav ul {
          padding: 5px 10px;
          position: absolute;
          top: 80px;
          left: 0;
          width: 100%;
          background-color: var(--principal-green);
          list-style: none;
          z-index: 1;
          transform: translateY(100%);
          transition: transform 0.5s;
          overflow-y: scroll;
          height: calc(100vh - 80px);
        }
        [id^=btn]:checked + ul{
          /* display: block; */
          transform: translateY(0%);
          transition: transform 1s;
        }
        nav ul li {
          font-size: 1.4rem;
          padding: 5px 0px;
          width: 100%;
        }
        nav ul li a {
          background-color: var(--principal-background);
          padding: 3px;
          border-radius: 2px;
          text-decoration: none;
          font-size: 1.4rem;
          color: var(--text-color-principal);
          width: 100%;
          display: block;
          font-size: 2rem;
          font-weight: 500;
        }
        .img-info-menu-container {
          width: 47%;
          max-width: 100px;
          height: 72px;
          background-image: url(../../assets/info_proyecto/conceptos.png);
          background-position-x: 0%;
          background-repeat: no-repeat;
          background-size: cover;
        }
        .menu-card-container {
          display: flex;
          align-items: center;
        }
        .menu-card-container img {
          width: 100px;
        }
        .menu-card-container span {
          padding: 0 5px 0 8px;
        }
        h2 {
          color: var(--principal-background);
        }
        input {
          display: none;
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
customElements.define('header-amz-phone', Header_amz_phone)