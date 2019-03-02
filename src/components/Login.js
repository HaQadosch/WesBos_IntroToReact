import React from 'react'
import PropTypes from 'prop-types'

export const Login = props => (
  <nav className='login'>
    <h2>Inventory Login</h2>
    <p>Sign in to manage your store's inventory.</p>
    <button className='github' onClick={_ => props.authenticate('Github')}> Log in with Github </button>
    <button className='facebook' onClick={_ => props.authenticate('Facebook')}> Log in with Facebook </button>
    <button className='twitter' onClick={_ => props.authenticate('Twitter')}> Log in with Twitter </button>
  </nav>
)

Login.propTypes = {
  authenticate: PropTypes.func.isRequired
}
