var Tick = /** @class */ (function () {
    function Tick(s, m, h) {
        var _this = this;
        this.tick = function () {
            var date = new Date();
            var sec = ((date.getSeconds() + .001) / 60) * 360 + 90;
            var min = ((date.getMinutes() + 0.001) / 60) * 360 + 90;
            var hour = ((date.getHours() + .001) / 24) * 360 + 90;
            _this._sec.style.transform = "rotate(".concat(sec, "deg)");
            _this._min.style.transform = "rotate(".concat(min, "deg)");
            _this._hour.style.transform = "rotate(".concat(hour, "deg)");
        };
        this._sec = document.getElementById(s);
        this._min = document.getElementById(m);
        this._hour = document.getElementById(h);
        this.tick();
        setInterval(this.tick, 1000);
    }
    return Tick;
}());
var tick = new Tick("sec-hand", "min-hand", "hour-hand");
//# sourceMappingURL=index.js.map