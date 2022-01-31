class Bibliografia_sesion extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open"})
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
      <section>
          <slot name="text-box"></slot>
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
          --font-size-p,
          --font-size-title,
          --title-align,
          --text-align-p,
        }
        section {
          width: 100%;
          display: flex;
          padding: var(--padding-sesion);
          flex-direction: column;
          gap: 20px;
        }
        slot {
          width: 100%;
          font-size: var(--font-size-p);
          line-height: 2.6rem;
          font-weight: 500;
          text-align: var(--text-align-p);
          color: black;
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
customElements.define('bibliografia-sesion', Bibliografia_sesion)