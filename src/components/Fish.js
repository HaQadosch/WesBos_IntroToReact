import React from 'react'
import PropTypes from 'prop-types'
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
    const unavailable = status === 'unavailable'
    const addToOrderOrSoldOut = unavailable ? 'Sold out' : 'Add to order'
    const addToOrder = _ => this.props.addToOrder(name)

    return (
      <li className='menu-fish'>
        <img src={image} alt={name} />
        <h3 className='fish-name'>
          {name} <span className='price'>{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button disabled={unavailable} onClick={addToOrder} >{addToOrderOrSoldOut}</button>
      </li>
    )
  }
}

Fish.propTypes = {
  details: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    desc: PropTypes.string,
    price: PropTypes.string,
    status: PropTypes.string
  }),
  addToOrder: PropTypes.func
}
