class Tick {
    _sec: HTMLElement;
    _min: HTMLElement;
    _hour: HTMLElement;

    constructor(s: string, m: string, h: string) {
        this._sec = document.getElementById(s)
        this._min = document.getElementById(m)
        this._hour = document.getElementById(h)
        this.tick()
        setInterval(this.tick, 1000)
    }

    tick = () => {
        let date = new Date();
        let sec = ((date.getSeconds() + .001) / 60) * 360 + 90
        let min = ((date.getMinutes() + 0.001) / 60) * 360 + 90
        let hour = ((date.getHours() + .001) / 24) * 360 + 90
        this._sec.style.transform = `rotate(${sec}deg)`
        this._min.style.transform = `rotate(${min}deg)`
        this._hour.style.transform = `rotate(${hour}deg)`
    }
}

let tick = new Tick("sec-hand", "min-hand", "hour-hand")


