import React from 'react'
import { formatPrice } from '../helpers'

/**
 * this.props.details {
    name: 'Pacific Halibut',
    image: '/images/hali.jpg',
    desc:
      'Everyone’s favorite white fish. We will cut it to the size you need and ship it.',
    price: 1724,
    status: 'available'
  }
 */
export class Fish extends React.Component {
  render () {
    const { name, image, desc, price, status } = this.props.details
    return (
      <li className='menu-fish'>
        <img src={image} alt={name} />
        <h3 className='fish-name'>
          {name} <span className='price'>{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button>Add to cart</button>
      </li>
    )
  }
}
