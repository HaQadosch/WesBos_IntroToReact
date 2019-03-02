import React from 'react'
import { Header } from './Header'
import { Order } from './Order'
import { Inventory } from './Inventory'
import { fishes } from '../sample-fishes'
import { Fish } from './Fish'
import { base } from '../base'

export class App extends React.Component {
  constructor () {
    super()
    this.state = {
      fishes: {},
      order: {}
    }
    this.addFish = fish => {
      const fishes = { ...this.state.fishes, [`fish${Date.now()}`]: fish }
      this.setState({ fishes })
    }

    this.loadSample = _ => {
      this.setState({ fishes })
    }

    this.addToOrder = name => {
      const order = { ...this.state.order }
      order[name] = order[name] + 1 || 1
      this.setState({ order })
    }

    this.updateFish = (key, updatedFish) => {
      const fishes = { ...this.state.fishes }
      fishes[key] = updatedFish
      this.setState({ fishes })
    }
  }

  componentDidMount () {
    const { storeId } = this.props.match.params
    const localStorageRef = window.localStorage.getItem(storeId)

    if (localStorageRef !== 'undefined') {
      this.setState({ order: JSON.parse(localStorageRef) })
    }
    this.ref = base.syncState(`${storeId}/fishes`, {
      context: this,
      state: 'fishes'
    })
  }

  componentDidUpdate () {
    window.localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order))
  }

  componentWillUnmount () {
    base.removeBinding(this.ref)
  }

  render () {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Fresh Seafood Market' />
          <ul className='fishes'>
            {
              Object.values(this.state.fishes).map((fish, i) => <Fish key={i} addToOrder={this.addToOrder} details={fish} />)
            }
          </ul>
        </div>
        <Order order={this.state.order} fishes={this.state.fishes} />
        <Inventory updateFish={this.updateFish} addFish={this.addFish} loadSample={this.loadSample} fishes={this.state.fishes} />
      </div>
    )
  }
}
