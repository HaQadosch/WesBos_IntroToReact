import React from 'react'
import { Header } from './Header'
import { Order } from './Order'
import { Inventory } from './Inventory'

export class App extends React.Component {
  constructor () {
    super()
    this.state = {
      fishes: [],
      order: {}
    }
    this.addFish = fish => {
      const fishes = [...this.state.fishes]
      fishes.push(fish)
      this.setState({ fishes })
      console.log('🐟🐟🐟', { fish })
    }
  }
  render () {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Fresh Seafood Market' />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    )
  }
}
