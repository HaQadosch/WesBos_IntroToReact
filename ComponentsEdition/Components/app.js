class App extends window.HTMLElement {
  constructor () {
    super()

    const shadow = this.attachShadow({ mode: 'open' })
    const fragment = document.createDocumentFragment()
    const div = document.createElement('div')
    div.className = 'catch-of-the-day'
    const link = document.createElement('link')
    link.setAttribute('rel', 'stylesheet')
    link.setAttribute('href', './css/style.css')

    const p = document.createElement('p')
    p.textContent = 'Heyy'
    div.appendChild(p)
    fragment.appendChild(link)
    fragment.appendChild(div)
    shadow.appendChild(fragment)
  }
}

window.customElements.define('catch-of-the-day', App)
