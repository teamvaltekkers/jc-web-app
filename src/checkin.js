
import firebase from "firebase";

const config = {
  apiKey: "AIzaSyA7G0X5hcTtTqAiK3geJlbpMKeN8zW6vMk",
  authDomain: "jc-web-app.firebaseapp.com",
  databaseURL: "https://jc-web-app.firebaseio.com",
  projectId: "jc-web-app",
  storageBucket: "jc-web-app.appspot.com",
  messagingSenderId: "1008144320173"
};

firebase.initializeApp(config);

const database = firebase.database();

const checkinUser = (name, time) =>
  database.ref('checkins/' + name+ ' checkin').set({
    time: time,
    name: name,
  });

document.addEventListener("DOMContentLoaded", function() {
  var button = document.getElementById('id-submit-button');
  button.addEventListener('click', () => checkinUser('Jane',new Date().getTime()));
});

