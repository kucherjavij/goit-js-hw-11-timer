
function timerEL(end) {
    const time = Date.parse(end) - Date.parse(new Date())
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    return {
        time,
        days,
        hours,
        mins,
        secs
      };
}

function outPut(ID, end) {
    const timer = document.getElementById(ID)
    function update() {
        const TIME = timerEL(end);

        refs.days.innerHTML = TIME.days;
        refs.hours.innerHTML = ('0' + TIME.hours).slice(-2);
        refs.mins.innerHTML = ('0' + TIME.mins).slice(-2);
        refs.secs.innerHTML = ('0' + TIME.secs). slice(-2);
        if (TIME.time <= 0) {
            clearInterval(interval);
        }
    }
    update();
    const interval = setInterval(update, 1000);
}


const deadLine = new Date(Date.parse(new Date())+15*24*60*60*1000)
outPut('timer-1', deadLine )
