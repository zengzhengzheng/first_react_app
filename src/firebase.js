import * as firebase form 'firebase'

const config = {
    apiKey: "AIzaSyAXP62CSmHyneUasSle4jyz-4337QBWPNM",
    authDomain: "reactblog-76e34.firebaseapp.com",
    databaseURL: "https://reactblog-76e34.firebaseio.com",
    projectId: "reactblog-76e34",
    storageBucket: "",
    messagingSenderId: "714865441699"
  };
  firebase.initializeApp(config);

export const batabase = firebase.database().ref('./posts');
