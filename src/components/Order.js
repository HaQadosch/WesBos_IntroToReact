import React from 'react'
import { formatPrice } from '../helpers'

export class Order extends React.Component {
  renderOrder ([fishName, qty], index) {
    const { fishes } = this.props
    const [ fish ] = Object.values(fishes).filter(fish => fish.name === fishName)
    console.log({ fish })

    const sorry = <li key={index}>Sorry {fish ? fish.name : 'fish'} no longer available</li>
    const detail = fish ? (
      <li key={index}>
        {qty} lbs {fishName}

        {formatPrice(qty * fish.price)}
      </li>
    ) : ''
    return fish ? fish.status === 'available' ? detail : sorry : ''
  }

  render () {
    const { fishes, order } = this.props
    const orders = Object.entries(order)

    const total = fishes && Object.values(fishes).length ? orders.reduce((accTotal, [fishName, qty]) => {
      const [ fish ] = Object.values(fishes).filter(fish => fish.name === fishName)
      console.log({ fishes, orders, fish })
      const fishPrice = fish.status === 'available' ? fish.price : 0
      return accTotal + (fishPrice * qty)
    }, 0) : 0

    return (
      <div className='order-wrap'>
        <h2>Your Order</h2>
        <ul className='order'>
          { orders.map(this.renderOrder.bind(this)) }
        </ul>
        <div className='total'>
          Total: <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    )
  }
}
