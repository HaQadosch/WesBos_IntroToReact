import React from 'react'
import { AddFishForm } from './AddFishForm'
import { EditFishForm } from './EditFishForm'

export class Inventory extends React.Component {
  render () {
    const fishes = Object.values(this.props.fishes)
    return (
      <div className='inventory'>
        <h2>Inventory</h2>
        <ul>
          { fishes.map((fish, index) => <EditFishForm updateFish={this.props.updateFish} key={index} index={index} fish={fish} />)}
        </ul>
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSample}>Load sample fishes</button>
      </div>
    )
  }
}
