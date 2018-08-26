export default class Clock {
    constructor() {
        this.now;
        this.hour;
        this.minute;
        this.second;
    }

    updateTime() {
        this.now = new Date();
        this.hour = this.now.getHours().toString().split('');
        this.minute = this.now.getMinutes().toString().split('');
        this.second = this.now.getSeconds().toString().split('');
        let time = []; // Declare as array

        if (!this.digitCheck(this.hour)) {
            this.hour.unshift('0');
        }
        if (!this.digitCheck(this.minute)) {
            this.minute.unshift('0');
        }
        if (!this.digitCheck(this.second)) {
            this.second.unshift('0');
        }

        time.push(this.hour);
        time.push(this.minute);
        time.push(this.second);

        return time;
    }

    /**
     * Check to see if there are 2 digits in total
     * @param {array} num 
     */
    digitCheck(num) {
        if (num.length !== 2) {
            return false;
        }
        else {
            return true;
        }
    }
}