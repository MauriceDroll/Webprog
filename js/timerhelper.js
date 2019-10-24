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
}
