export default class Circle {
    constructor(ctx, data) {
        this.ctx = ctx;
        this.radius = 150;
        this.originX = 250;
        this.originY = 250;
        this.setData(data);
        this.timer = 0;
        this.animateTime = 1;
        this.animate = false;
        this.animateStep = 1;
        this.renderComplete = false;
    }
    config(opts) {
        Object.keys(opts).forEach(key => {
            if (this.hasOwnProperty(key)) {
                this[key] = opts[key]
            }
        })
    }
    setData(data) {
         let total = data.reduce((total, current) => {
            return total + current.value
        }, 0);
        this.total = total;
        this.renderData = data.map(item => {
            let color = this.getColor();
            let percent = Number(item.value / total).toFixed(2);
            let angle = +percent * 360;
            return Object.assign({}, item, {color, percent, angle});
        })
    }

    getColor() {
        let {timer} = this;
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        let a = Math.random();
        this.timer++;
        return `rgba(${r}, ${g}, ${b}, ${a})`
    }

    draw() {
        let {ctx, originX, originY, animate} = this;
        let self = this;
        ctx.clearRect(0, 0, 500, 500);
        ctx.strokeStyle = '#fff';
        ctx.strokeWidth = 1;
        ctx.translate(originX, originY);
        ctx.save();
        this.start();

    }
    start() {
        let {ctx, originX, originY, animate} = this;
        let self = this;
        if (animate) {
            if (window.requestAnimationFrame) {
                this.animateId = window.requestAnimationFrame(self.start.bind(self));
                this.renderCircle();
            } else {

            }
        } else {
            this.renderCircle();
        }
    }
    renderCircle() {
        let {ctx, radius, renderData, animateTime, animate, animateStep} = this;
        let steps = animateTime * 60;
        let startAngle = 0;
        let radian = Math.PI / 180;
        console.log(animateStep)
        if (animateStep >= steps) {
            this.animateId && window.cancelAnimationFrame(this.animateId);
            return
        }
        renderData.forEach((item, index) => {
            ctx.fillStyle = item.color;
            ctx.beginPath();
            let end = 0;
            if (animate) {
                end = index === renderData.length - 1
                    ? 360 * radian
                    : (startAngle + item.angle * animateStep / steps) * radian;
            } else {
                end = index === renderData.length - 1
                    ? 360 * radian
                    : (startAngle + item.angle) * radian;
            }
            ctx.arc(0, 0, radius, startAngle * radian, end);
            ctx.lineTo(0, 0);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            startAngle += item.angle;
            this.animateStep++;
        });
    }
}
