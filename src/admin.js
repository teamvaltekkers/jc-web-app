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
      // $('#' + checkin.status).insert(`<li class="app-task-list__item" id="${checkin.id}"><a class="app-task-list__task-name" href="">${checkin.name} - ${(new Date(checkin.time)).toString().split(' ')[4].substr(0, 5)}</a><strong class="${checkin.status_spec} govuk-tag app-task-list__task-completed" id="contact-details-completed">${checkin.status_spec}</strong></li>`);
      document.getElementById(checkin.status).innerHTML += `<li class="app-task-list__item" id="${checkin.id}"><a class="app-task-list__task-name" href="">${checkin.name} - ${(new Date(checkin.time)).toString().split(' ')[4].substr(0, 5)}</a><strong class="${checkin.status_spec} govuk-tag app-task-list__task-completed" id="contact-details-completed">${checkin.status_spec}</strong></li>`;
    })
  });

  registerResetFireBase();
});

const registerResetFireBase = () => {
  var resetButton = document.getElementById('resetList');
  resetButton.addEventListener('click', () =>{

    database.ref('checkins/785376436542').set({
      id: '785376436542',
      time: new Date().getTime() + (9 * 60 * 1000),
      name: 'Jane',
      status: 'due',
      status_spec: 'due'
    });

    database.ref('checkins/8652524654254').set({
      id: '8652524654254',
      time: new Date().getTime() - (1 * 60 * 1000),
      name: 'Jack',
      status: 'due',
      status_spec: 'late'
    });

    database.ref('checkins/54264325432').set({
      id: '54264325432',
      time: new Date().getTime() - (5 * 63 * 69 * 1000),
      name: 'Paul',
      status: 'complete',
      status_spec:'completed'
    });

    database.ref('checkins/547869864563').set({
      id: '547869864563',
      time: new Date().getTime() - (3 * 60 * 60 * 1000),
      name: 'Phil',
      status: 'complete',
      status_spec:'missed'
    });
  })

}