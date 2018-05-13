class Timer {
    myTimer;
    ticks = [];
    constructor(private time) {}

    start() {
        this.myTimer = setInterval(() => {
            this.ticks.forEach(elem => {
               elem();
            });
        },this.time);
    }

    stop() {
        clearInterval(this.myTimer);
    }

    tick(callback) {
        this.ticks.push(callback);
    }
}
main();

function main() {
    const timer = new Timer(1500);
    timer.tick(onTick1);
    timer.tick(onTick2);

    timer.start();

    function onTick1() {
        console.log("tick1");
    }

    let counter = 0;
    function onTick2() {
        console.log("tick2");

        if(++counter == 3){
            timer.stop();
        }
    }
}

