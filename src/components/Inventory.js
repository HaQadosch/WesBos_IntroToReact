import React from 'react'
import { AddFishForm } from './AddFishForm'
import { EditFishForm } from './EditFishForm'
import { Login } from './Login'
import firebase from 'firebase'
import { firebaseApp, base } from '../base'
import 'babel-polyfill'

export class Inventory extends React.Component {
  constructor () {
    super()
    this.state = {
      uid: null,
      owner: null
    }
  }

  componentDidMount () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user })
      }
    })
  }

  async authHandler (authData) {
    const store = await base.fetch(this.props.storeId, { context: this })
    if (!store.owner) {
      await base.post(`${this.props.storeId}/owner`, { data: authData.user.uid })
    }
    this.setState({
      uid: authData.user.uid,
      owner: store.owner || authData.user.uid
    })
  }

  authenticate (provider) {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]()
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler.bind(this), this.rejected)
  }

  async logout () {
    await firebaseApp.auth().signOut()
    this.setState({ uid: null })
  }

  render () {
    const logout = <button onClick={this.logout.bind(this)} >Log out</button>

    if (this.state.uid === null) {
      return (<Login authenticate={this.authenticate.bind(this)} />)
    }
    if (this.state.uid !== this.state.owner) {
      return (
        <div>
          {logout}
          <p>Sorry you are not the owner</p>
        </div>
      )
    }
    const fishes = Object.values(this.props.fishes)
    return (
      <div className='inventory'>
        <h2>Inventory</h2>
        {logout}
        <ul>
          { fishes.map((fish, index) => <EditFishForm updateFish={this.props.updateFish} key={index} index={index} fish={fish} />)}
        </ul>
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSample}>Load sample fishes</button>
      </div>
    )
  }
}
