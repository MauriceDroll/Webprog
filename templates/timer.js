const timer = '' +
    '<div class="timerHeader" ><p >Timer</p></div>'+
    '<div class="clock">'+
    '<div class="hours">'+
      '<div class="first">'+
        '<div class="number">0</div>'+
      '</div>'+
      '<div class="second">'+
        '<div class="number">0</div>'+
      '</div>'+
    '</div>'+
    '<div class="tick">:</div>'+
    '<div class="minutes">'+
      '<div class="first">'+
        '<div class="number">0</div>'+
      '</div>'+
      '<div class="second">'+
        '<div class="number">0</div>'+
      '</div>'+
    '</div>'+
    '<div class="tick">:</div>'+
    '<div class="seconds">'+
      '<div class="first">'+
        '<div class="number">0</div>'+
      '</div>'+
      '<div class="second infinite">'+
        '<div class="number">0</div>'+
      '</div>'+
    '</div>'+
  '</div>'+
  '<style onload="timeHelper()"></style>'+
  '<p><br/><br/><audio id="alert" src="../assets/peep.mp3" preload="auto"></audio></p>'+
  '<div class="center"><p>Erinnere mich nach <input id="reminderTime" type="time" value="05:00"></input> Minuten noch einmal.</p></div>'
  ;
 