import React from 'react'
import { getFunName } from '../helpers'

export class StorePicker extends React.Component {
  constructor () {
    super()

    this.goToStore = evt => {
      evt.preventDefault()
      console.log('Store!!', { evt, name: this.storeNameInput.current.value })
      this.props.history.push(`/store/${this.storeNameInput.current.value}`)
    }
    this.storeNameInput = React.createRef()
  }

  render () {
    return (
      <form className='store-selector' onSubmit={this.goToStore} >
        <h2>Please Enter A Store</h2>
        <input type='text' ref={this.storeNameInput} required placeholder='Store Name' defaultValue={getFunName()} />
        <button type='submit'>Visit Store →</button>
      </form>
    )
  }
}
