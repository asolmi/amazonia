class Header extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open"})
  }

  getTemplate() {
    const title_sesions = [
      {title: "Las Amazonas nacionales construyendo espacios estatales", route: "../../pages/8-las-amazonas-nacionales-construyendo-espacios-estatales"},
      {title: "Encuentros cartográficos y demarcación de fronteras en la Amazonía", route: "../../pages/8-las-amazonas-nacionales-construyendo-espacios-estatales"},
      {title: "Representación indígena del espacio amazónico", route: "../../pages/8-las-amazonas-nacionales-construyendo-espacios-estatales"},
    ]
    const template = document.createElement("template");
    template.innerHTML = `
      <header>
        <div class="header-container">
          <section class="logo-container">
            <a href="./"> 
              <img class="logo" src="./assets/general/Amazonia_cartografica.png" alt="amazonia cartografica">
            </a>
          </section>
          
          <section class="menu-container">
            <nav>
              <label for="btn" class="sesiones-menu">
                TEMAS
              </label>
              <input type="checkbox" id="btn">
              <ul class="menu">
                ${title_sesions.map(item => `
                  <li><a href="${item.route}">${item.title}</a></li>
                `).join('')}
              </ul>
            </nav>
            
            <div class="info-detail-container">
              <a class="link-to-info" href="/pages/info/">i</a>
              <div class="info-notification-box"></div>
            </div>
          </section>
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
        :host {
          --margin-sesion-header: 0 20px;
          --width-sesion-header: 1300px;
          --width-nav-header: 1100px;
          --padding-nav-header: 30px;
        }

        header {
          display: flex;
          justify-content: center;
          position: fixed;
          width: 100%;
          z-index: 4;

          background-image: url(./assets/general/Vintage_Paper_19.jpg);
          background-position: top;
          background-repeat: no-repeat;
          background-size: cover;
        }
        .header-container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: var(--width-sesion-header);
          margin: var(--margin-sesion-header);
          gap: 15px;
          height: 110px;
        }
        .logo {
          width: 235px;
        }
        .menu-container {
          display: flex;
          align-items: center;
          max-width: var(--width-nav-header);
          width: 100%;
          gap: 15px;
        }
        .info-detail-container {
          position: relative;
          width: 50px;
          height: 50px;
          border-radius: 30px;
          background-color: var(--principal-background);
        }
        header .link-to-info {
          width: inherit;
          height: inherit;
          border-radius: 30px;
          font-size: 2.4rem;
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
        }
        .info-detail-container .info-notification-box {
          height: 10px;
          width: 10px;
          border-radius: 30px;
          background-color: red;
          position: absolute;
          top: 0;
          right: 0;
          box-shadow: 2px 3px 3px 0px rgb(0 0 0 / 25%);
        }
        nav {
          position: relative;
          width: 100% ;
          background-color: var(--principal-background);
          height: 30px;
          display: flex;
          align-items: center;
        }
        nav label {
          display: block;
          width: 100%;
          font-size: 2rem;
          padding-left: var(--padding-nav-header);
          cursor: pointer;
        }
        nav ul {
          display: none;
          position: absolute;
          top: 46px;
          left: 0;
          width: 100%;
          background-color: var(--principal-background);
          list-style: none;
        }
        [id^=btn]:checked + ul {
          display: block;
        }
        nav ul li {
          font-size: 1.4rem;
          line-height: 35px;
          padding-left: var(--padding-nav-header);
          cursor: pointer;
        }
        nav ul li:nth-child(even) {
          background-color: var(--secondary-background);
        }
        nav ul li:hover {
          background-color: var(--principal-green);
        }
        nav ul li a {
          text-decoration: none;
          font-size: 2rem;
          color: var(--text-color-principal);
          width: 100%;
          display: block;
        }
        nav ul li a:hover {
          color: white;
        }
        nav .menu::before {
          position: absolute;
          content: '';
          height: 20px;
          width: 20px;
          background-color: var(--principal-background);
          right: 20px;
          top: -10px;
          transform: rotate(45deg);
          z-index: -1;
        }
        .menu::-webkit-scrollbar {
          width: 8px;
          background-color: #0d141f;
        }
        label::before {
          content: "";
          position: absolute;
          --size: 10px;
          border-left: var(--size) solid transparent;
          border-right: var(--size) solid transparent;
          border-top: var(--size) solid #0e0e0e93;
          right: 10px;
          top: 50%;
          transform: translate(-50%, -50%);
          transition: all 1s;
        }
        /* label::before::selection {
          transform: rotateX(180deg);
          right: 10px;
          top: 10px;
        } */
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
customElements.define('header-amz-cartografica', Header)