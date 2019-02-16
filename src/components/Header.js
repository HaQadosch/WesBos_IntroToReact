import React from 'react'

export class Header extends React.Component {
  render () {
    return (
      <header className='top'>
        <h1>Catch
          <span className='ofThe'>
            <span className='of'>Of</span>
            <span className='the'>The</span>
          </span>
          Day</h1>
        <h3 className='tagline'>
          <span>Fresh seafood market</span>
        </h3>
      </header>
    )
  }
}
