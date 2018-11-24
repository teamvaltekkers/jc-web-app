
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

document.addEventListener("DOMContentLoaded", function() {
  var waitingUl = document.getElementById('waiting');
  var checkInRef = database.ref('checkins/');

  checkInRef.on('value', (snapshot) =>{
    var checkins = snapshot.val();
    Object.values(checkins).forEach((checkin) => {
      $('#' + checkin.status).insert(`<li class="app-task-list__item" id="${checkin.id}"><a class="app-task-list__task-name" href="">${checkin.name} - ${(new Date(checkin.time)).toString().split(' ')[4].substr(0, 5)}</a><strong class="${checkin.status_spec} govuk-tag app-task-list__task-completed" id="contact-details-completed">${checkin.status_spec}</strong></li>`);
    })
  });

  registerResetFireBase();
});

const registerResetFireBase = () => {
  var resetButton = document.getElementById('resetList');
  resetButton.addEventListener('click', () =>{
    database.ref('checkins/Joe checkin').set({
      time: new Date().getTime(),
      name: 'Joe',
      status: 'pending',
      status_spec:'late'
    });
    database.ref('checkins/Jack checkin').set({
      time: new Date().getTime(),
      name: 'Jack',
      status: 'pending',
      status_spec:'late'
    });

    database.ref('checkins/Paul checkin').set({
      time: new Date().getTime(),
      name: 'Paul',
      status: 'pending',
      status_spec:'late'
    });

    database.ref('checkins/Phil checkin').set({
      time: new Date().getTime(),
      name: 'Phil',
      status: 'pending',
      status_spec:'late'
    });
  })

}