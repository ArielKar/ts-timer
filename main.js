var Timer = /** @class */ (function () {
    function Timer(time) {
        this.time = time;
        this.ticks = [];
    }
    Timer.prototype.start = function () {
        var _this = this;
        this.myTimer = setInterval(function () {
            _this.ticks.forEach(function (elem) {
                elem();
            });
        }, this.time);
    };
    Timer.prototype.stop = function () {
        clearInterval(this.myTimer);
    };
    Timer.prototype.tick = function (callback) {
        this.ticks.push(callback);
    };
    return Timer;
}());
main();
function main() {
    var timer = new Timer(1500);
    timer.tick(onTick1);
    timer.tick(onTick2);
    timer.start();
    function onTick1() {
        console.log("tick1");
    }
    var counter = 0;
    function onTick2() {
        console.log("tick2");
        if (++counter == 3) {
            timer.stop();
        }
    }
}
//# sourceMappingURL=main.js.map