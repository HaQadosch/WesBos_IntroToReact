import React from 'react'

export class EditFishForm extends React.Component {
  constructor () {
    super()

    this.fishName = React.createRef()
    this.fishPrice = React.createRef()
    this.fishStatus = React.createRef()
    this.fishDesc = React.createRef()
    this.fishImage = React.createRef()

    this.handleChange = evt => {
      const { name, value } = evt.currentTarget
      const newFish = { ...this.props.fish, [name]: value }
      this.props.updateFish(this.props.index, newFish)
    }
  }

  render () {
    const { name, price, status, desc, image } = this.props.fish
    return (
      <div className='fish-edit'>
        <input name='name' ref={this.fishName} type='text' placeholder='Name' onChange={this.handleChange} value={name} />
        <input name='price' ref={this.fishPrice} type='text' placeholder='Price' onChange={this.handleChange} value={price} />
        <select name='status' ref={this.fishStatus} onChange={this.handleChange} value={status} >
          <option value='available'>Fresh</option>
          <option value='unavailable'>Sold Out</option>
        </select>
        <textarea name='desc' ref={this.fishDesc} placeholder='Desc' onChange={this.handleChange} value={desc} />
        <input name='image' ref={this.fishImage} type='text' placeholder='Image' onChange={this.handleChange} value={image} />
      </div>
    )
  }
}
