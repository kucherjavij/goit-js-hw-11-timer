
const refs = {
days:document.querySelector('[data-value="days"]'),
hours: document.querySelector('[data-value="hours"]'),
mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]'),
timer:document.querySelector('#timer-1')
}
// new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Jul 17, 2019'),
// });

class CountdownTimer {
    constructor({ update }) {
        this.update = update;
    }

    start() {
        const startTime = Date.now();
        setInterval(() => {
            const currentTime = Date.now()
            const delta = this.targetDate - startTime;
            const timeComponents = this.getTimeComponents(delta);
            console.log(timeComponents)

            this.update(timeComponents)
        }, 1000);
    }
    getTimeComponents(time) {
    
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        return {
            
            days,
            hours,
            mins,
            secs
          };
    }

    pad(val) {
        return String(val).padStart(2, '0')
    }
}

const timer2 = new CountdownTimer({
    update: updateTimer,
        selector: '#timer-1',
        targetDate: new Date('December 24 2021'),
    });



function t()  { CountdownTimer.start() }
function updateTimer({ days, hours, mins, secs }) {
    refs.timer.textContent = `${days}:${hours}:${mins}:${secs}`
}
console.log(updateTimer)
