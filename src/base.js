import Rebase from 're-base'
import firebase from 'firebase'

export const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCPj87R0ZnovZNw2XwH9frgfxUKyXpcaKM',
  authDomain: 'catch-of-the-day-d3c89.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-d3c89.firebaseio.com'
})

export const base = Rebase.createClass(firebaseApp.database())
