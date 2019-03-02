import React from 'react'
import { Header } from './Header'
import { Order } from './Order'
import { Inventory } from './Inventory'
import { fishes } from '../sample-fishes'
import { Fish } from './Fish'

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

    this.loadSample = _ => {
      this.setState({ fishes: Object.values(fishes) })
    }
  }

  render () {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Fresh Seafood Market' />
          <ul className='fishes'>
            {
              this.state.fishes.map((fish, i) => <Fish key={i} details={fish} />)
            }
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSample={this.loadSample} />
      </div>
    )
  }
}
