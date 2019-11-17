let timerCount = 0;

function initTimer() {
    if (time === undefined) {
        document.getElementById("counter").textContent = "00:00";
        alert("Bitte auf der Startseite den Timer stellen")
    } else {
        let duration = time;
        let test = document.getElementById("counter");
        setInterval(function () {
            let minutes = parseInt(duration / 60000, 10);
            let seconds = parseInt(duration / 1000 % 60, 10);
            if (seconds < 10) {
                seconds = "0" + seconds
            }
            if (minutes < 10) {
                minutes = "0" + minutes
            }
            test.textContent = minutes + ":" + seconds;
            if (duration < 1000) {
                timerReachedZero();
                return
            }
            duration = duration - 1000;
            if (timerCount !== 0) {
                updateEveryOtherTimer()
            }
        }, 1000);
    }
}

function timerReachedZero() {
    if (!document.getElementById("mute").checked) {
        document.getElementById('alert').play();
    }
}

function addTimer() {
    if (time !== undefined) {
        if (timerCount === 0) {
            document.getElementById("timer1").textContent = document.getElementById("reminderTime").value;
            timerCount++
        } else if (timerCount === 1) {
            document.getElementById("timer2").textContent = document.getElementById("reminderTime").value;
            timerCount++
        } else if (timerCount === 2) {
            document.getElementById("timer3").textContent = document.getElementById("reminderTime").value;
            timerCount++
        } else if (timerCount >= 3) {
            timerCount = 3;
            let x = document.getElementById("snackbar");
            x.className = "show";
            setTimeout(function () {
                x.className = x.className.replace("show", "");
            }, 3000);
        }
    } else {
        alert("Timer muss gestellt sein")
    }
}

function updateEveryOtherTimer() {
    updateOtherTimer("timer1");
    updateOtherTimer("timer2");
    updateOtherTimer("timer3");
}

function updateOtherTimer(timerid) {
    let t = document.getElementById(timerid).textContent;
    if (t == null || t === "" || t === "00:00") {
        if (t === "00:00") {
            if (!document.getElementById("mute").checked) {
                document.getElementById('alert').play();
            }
            document.getElementById(timerid).textContent = "";
            timerCount--;
        }
    } else {
        let timer1 = document.getElementById(timerid).textContent;
        let date = new Date(0, 0, 0, 0, timer1.split(":")[0], timer1.split(":")[1], 0);
        date = updateDateBy(date, 100);
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        if (seconds < 10) {
            seconds = "0" + seconds
        }
        if (minutes < 10) {
            minutes = "0" + minutes
        }
        document.getElementById(timerid).textContent = minutes + ":" + seconds;
    }
}

function updateDateBy(date, ms) {
    return new Date(0, 0, 0, date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds() - ms)
}
