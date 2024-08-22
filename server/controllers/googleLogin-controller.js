const { auth } = require('../config/firebaseconfig');
const { GoogleAuthProvider, signInWithPopup } = require('firebase/auth');

const googleLogin = (req, res) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // Handle successful Google login
      const user = result.user;
      res.json({ user });
    })
    .catch((error) => {
      // Handle Google login error
      res.status(400).json({ error: error.message });
    });
};

const googleCallback = (req, res) => {
  // Handle the Google OAuth callback
  // This could include exchanging a code for an access token, etc.
  res.json({ message: 'Google OAuth callback received' });
};

module.exports = {
  googleLogin,
  googleCallback
};