class Clock {
    constructor(template) {
        this.template = template
    }
    render = () => {
        var date = new Date();

        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);

        console.log(output);
    }

    start = function() {
        this.render();
        this.timer = setInterval(this.render, 1000);
    };

    stop = function() {
        clearInterval(this.timer);
    };
        
}

let jam = new Clock({template: "h:m:s"});
jam.start()

setTimeout(() => {
    jam.stop()
}, 10000)