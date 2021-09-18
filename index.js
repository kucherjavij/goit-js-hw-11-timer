
class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.refs = {
            daysEL:document.querySelector(`${selector} [data-value="days"]`),
            hoursEL: document.querySelector(`${selector} [data-value="hours"]`),
            minsEL: document.querySelector(`${selector} [data-value="mins"]`),
                secsEL: document.querySelector(`${selector} [data-value="secs"]`),
            
            }  
            this.start(targetDate)
    }
    pad(value) {
        return String(value).padStart(2, '0')
    }
    
    getTimeComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)))
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)))
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000))
        return {days,hours,mins,secs}
    }
    updateTimer({ days, hours, mins, secs }) {
        this.refs.daysEL.textContent = `${days}`
        this.refs.hoursEL.textContent = `${hours}`
        this.refs.minsEL.textContent = `${mins}`
        this.refs.secsEL.textContent = `${secs}`
    }
    start(targetDate) {
        setInterval(() => {
            this.updateTimer(this.getTimeComponents(targetDate - Date.now()))
        }, 1000);
    }

}

new CountdownTimer({
        selector: '#timer-1',
        targetDate: new Date('Dec 24, 2021'),
    });







