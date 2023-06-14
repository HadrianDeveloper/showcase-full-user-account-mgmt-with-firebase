import { initializeApp } from "firebase/app";
import { 
  getAuth,
  deleteUser, 
  signInWithEmailAndPassword,
  signOut, 
  sendPasswordResetEmail,
  reauthenticateWithCredential,
  createUserWithEmailAndPassword,
  EmailAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCDCKADbfhB6rEAil3Em2_Boh9VlAFb2rI",
  authDomain: "authentication-spike-b2c7f.firebaseapp.com",
  projectId: "authentication-spike-b2c7f",
  storageBucket: "authentication-spike-b2c7f.appspot.com",
  messagingSenderId: "986957992832",
  appId: "1:986957992832:web:9d03e816530d2f252f2765"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function handleSignup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((creds) => creds._tokenResponse.email)
    .catch((err) => err.code)
};

export function handleSignin(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((creds) => creds._tokenResponse.email)
    .catch((err) => err.code)
};

export function handleSignout() {
  return signOut(auth)
    .then(() => console.log('Signed out!'))
    .catch((err) => console.error(err))
};

export function handlePasswordReset(email) {
  return sendPasswordResetEmail(auth, email)
    .then(() => null)
    .catch((err) => err.code)
};

export function reauthenticate(password) {
  const {currentUser} = auth;
  const {email} = currentUser;
  const creds = EmailAuthProvider.credential(email, password);
  return reauthenticateWithCredential(currentUser, creds)
    .then(() => null)
    .catch((err) => err.code)
}

export function handleSelfDeletion() {
  const {currentUser} = auth;
  return deleteUser(currentUser)
    .then(() => null)
    .catch((err) => err.code)
};