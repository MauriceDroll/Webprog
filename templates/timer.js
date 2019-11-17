const timer = '' +
    '<div class="timercontainer">' +
      '<div id="counter" class="clock">00:00</div>' +
      '<div class="center">...bis der Kaffee kalt ist</div>' +
      '<p>' +
        '<audio id="alert" src="../assets/peep.mp3" preload="auto"></audio>' +
      '</p>' +
      '<div class="row newtimercontainer">' +
        '<label for="reminderTime" class="">Erinnere mich nach </label>' +
        '<input id="reminderTime" type="time" class="" value="05:00">' +
        '<div class="">Minuten noch einmal.</div>' +
      '</div>' +
      '<div class="row">' +
        '<button onClick="addTimer()" class="btn btn-primary newtimerbutton col-md-12">Neuer Timer</button>' +
      '</div>' +
      '<div class="row mutecontainer">' +
        '<input id="mute" value="1" class="verticalalign" type="checkbox">' +
        '<label for="mute">Alarm stumm schalten</label>' +
      '</div>' +
      '<div class="row additionaltimercontainer">' +
        '<div id="timer1" class="col-md-12"></div>' +
        '<div id="timer2" class="col-md-12"></div>' +
        '<div id="timer3" class="col-md-12"></div>' +
      '</div>' +
      '<div id="snackbar">Zu viele Timer</div>' +
    '</div>' +
    '<style onload="initTimer()"></style>';
