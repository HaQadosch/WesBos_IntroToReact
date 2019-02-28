import React from 'react'

export class AddFishForm extends React.Component {
  constructor () {
    super()

    this.createFish = evt => {
      evt.preventDefault()
      const fish = {
        name: this.fishName.current.value,
        price: Number.parseFloat(this.fishPrice.current.value),
        status: this.fishStatus.current.value,
        desc: this.fishDesc.current.value,
        image: this.fishImage.current.value

      }
      this.props.addFish(fish)
      evt.currentTarget.reset()
    }
    this.fishName = React.createRef()
    this.fishPrice = React.createRef()
    this.fishStatus = React.createRef()
    this.fishDesc = React.createRef()
    this.fishImage = React.createRef()
  }

  render () {
    return (
      <form className='fish-edit' onSubmit={this.createFish}>
        <input name='name' ref={this.fishName} type='text' placeholder='Name' />
        <input name='price' ref={this.fishPrice} type='text' placeholder='Price' />
        <select name='status' ref={this.fishStatus}>
          <option value='available'>Fresh</option>
          <option value='unavailable'>Sold Out</option>
        </select>
        <textarea name='desc' ref={this.fishDesc} placeholder='Desc' />
        <input name='image' ref={this.fishImage} type='text' placeholder='Image' />
        <button type='submit'>+ Add Fish</button>
      </form>
    )
  }
}
