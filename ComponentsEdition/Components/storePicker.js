class StorePicker extends window.HTMLElement {
  constructor () {
    super()

    const shadow = this.attachShadow({ mode: 'open' })

    const wrapper = document.createElement('p')
    wrapper.textContent = 'Hello'

    shadow.appendChild(wrapper)
  }
}

window.customElements.define('store-picker', StorePicker)
