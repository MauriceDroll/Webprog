
function timeHelper(){

var hoursContainer = document.querySelector('.hours')
var minutesContainer = document.querySelector('.minutes')
var secondsContainer = document.querySelector('.seconds')
var tickElements = Array.from(document.querySelectorAll('.tick'))

var last = new Date(0, 0 , 0 , 0 , 0 , 5 , 0)
var reminderTime = new Date()
//last.setUTCHours(-1)
updateContainer(hoursContainer, last.getHours().toString())
updateContainer(minutesContainer,last.getMinutes().toString())
var tickState = true
function updateDateBy(date,ms){
  return new Date(0,0,0,date.getHours(),date.getMinutes(),date.getSeconds(),date.getMilliseconds()-ms)
}
function updateTime () {
  if(tickState){
    var now = updateDateBy(last,100)
  
    var lastHours = last.getHours().toString()
    var nowHours = now.getHours().toString()
    if (lastHours !== nowHours) {
      updateContainer(hoursContainer, nowHours)
    }
  
    var lastMinutes = last.getMinutes().toString()
    var nowMinutes = now.getMinutes().toString()
    if (lastMinutes !== nowMinutes) {
      updateContainer(minutesContainer, nowMinutes)
    }
  
    var lastSeconds = last.getSeconds().toString()
    var nowSeconds = now.getSeconds().toString()
    if (lastSeconds !== nowSeconds) {
      //tick()
      updateContainer(secondsContainer, nowSeconds)
    }
    if(nowHours==0 && nowMinutes ==0 &&nowSeconds==0){
      tickState=false
      timerReachedZero()
    } 
    last = now
  }
}

function tick () {
  tickElements.forEach(t => t.classList.toggle('tick-hidden'))
}

function updateContainer (container, newTime) {
  var time = newTime.split('')
  
  if (time.length === 1) {
    time.unshift('0')
  }
  
  
  var first = container.firstElementChild
  if (first.lastElementChild.textContent !== time[0]) {
    updateNumber(first, time[0])
  }
  
  var last = container.lastElementChild
  if (last.lastElementChild.textContent !== time[1]) {
    updateNumber(last, time[1])
  }
}

function updateNumber (element, number) {
  //element.lastElementChild.textContent = number
  var second = element.lastElementChild.cloneNode(true)
  second.textContent = number
  
  element.appendChild(second)
  element.classList.add('move')
  setTimeout(function () {
    element.removeChild(element.firstElementChild)
  }, 1)
  setTimeout(function () {
    element.classList.remove('move')
  }, 1)

}

function timerReachedZero(){
  document.getElementById('alert').play();
}


setInterval(updateTime, 100)
setInterval(updateEveryOtherTimer,1000)
}
let timerCount=0;
function addTimer(){
  if(timerCount==0) {
    document.getElementById("timer1").textContent=document.getElementById("reminderTime").value;
    timerCount++
  }
  else if(timerCount==1) {
    document.getElementById("timer2").textContent=document.getElementById("reminderTime").value;
    timerCount++
    }
  else if(timerCount==2) {
    document.getElementById("timer3").textContent=document.getElementById("reminderTime").value;
    timerCount++
    }
  else if(timerCount>=3){
    timerCount=3;
        // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }
 }
function updateEveryOtherTimer(){
  updateOtherTimer("timer1");
  updateOtherTimer("timer2");
  updateOtherTimer("timer3");
}
function updateOtherTimer(timerid){
  let t= document.getElementById(timerid).textContent
  if(t==null || t=="" || t=="0:0"){
    if(t=="0:0"){
      document.getElementById('alert').play();
      document.getElementById(timerid).textContent=""
      timerCount--;
    }
  }
  else{
  let timer1 = document.getElementById(timerid).textContent
  var date = new Date(0, 0 , 0 , 0 , timer1.split(":")[0] , timer1.split(":")[1] , 0);
  date = updateDateBy(date,100);
  
  document.getElementById(timerid).textContent=date.getMinutes()+":"+date.getSeconds();
  }
 }
function updateDateBy(date,ms){
  return new Date(0,0,0,date.getHours(),date.getMinutes(),date.getSeconds(),date.getMilliseconds()-ms)
}