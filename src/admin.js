
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
    var newList = '';
    Object.values(checkins).map((checkin)=>{
      const checkinDateTime = new Date(checkin.time);
      newList += `<li class="app-task-list__item" id="Jane"><a class="app-task-list__task-name" href="">${checkin.name} - ${checkinDateTime.getHours()}:${checkinDateTime.getMinutes()}</a><strong class="waiting govuk-tag app-task-list__task-completed" id="contact-details-completed">waiting</strong></li>`
    })
    waitingUl.innerHTML = newList;
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