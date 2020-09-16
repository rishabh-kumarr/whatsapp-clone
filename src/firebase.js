import firebase from 'firebase'
import firebase_Config from './config'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase_Config 

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db
