export default class Clock {
    constructor(ctx, opts) {
        if (!(this instanceof Clock)) {
            return new Clock(ctx, opts)
        }
        this.ctx = ctx;
        this.setDefault(opts);
    }

    setDefault(opts) {
        let defaults = {
            width: 500,
            height: 500,
            hasSec: true,
            secLineWidth: 2,
            minLineWidth: 3,
            houLineWidth: 5,
            tickWidth: 5,
            tickHeight: 8,
            globalLineWidth: 6
        };
        let _opts = Object.assign({}, defaults, opts || {});
        this.extend(this, _opts);
        this.setBasic();
    }

    setBasic() {
        let {width, height} = this;
        this.origin = Math.floor(Math.max(width, height) / 2);
        this.originX = width - this.origin;
        this.originY = height - this.origin;
        this.globalRadius = this.origin - 20 || 10;
    }

    extend(target, source) {
        Object.keys(source).forEach(key => {
            target[key] = source[key]
        })
    }

    draw() {
        if (this.animate) {
            this.timer = setInterval(() => {
                this._drawCircle();
            }, 1000)
        } else {
            this._drawCircle();
        }
    }

    _drawCircle() {
        let {ctx, globalRadius, globalLineWidth, originX, originY, width, height} = this;
        ctx.strokeStyle = '#000';
        ctx.lineWidth = globalLineWidth;
        ctx.clearRect(0, 0, width, height);
        ctx.beginPath();
        ctx.arc(originX, originY, globalRadius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.stroke();
        this._drawTick();
    }

    _drawTick() {
        let {ctx, globalRadius, originX, originY, tickWidth, tickHeight} = this;
        ctx.save();
        ctx.translate(originX, originY);
        for (let i = 0; i < 12; i++) {
            let _height = i % 3 ? tickHeight + 3 : tickHeight;
            ctx.lineWidth = i % 3 ? tickWidth + 2 : tickWidth;
            ctx.beginPath();
            ctx.moveTo(0, globalRadius * -1);
            ctx.lineTo(0, globalRadius * -1 + _height);
            ctx.closePath();
            ctx.stroke();
            ctx.rotate(Math.PI / 6);
        }
        ctx.restore();
        this._drawSecTick();
    }

    _drawSecTick() {
        let {ctx, globalRadius, originX, originY, tickWidth, tickHeight} = this;
        ctx.save();
        ctx.translate(originX, originY);
        ctx.lineWidth = tickWidth - 2;
        for (let i = 0; i < 60; i++) {
            if (i % 5 > 0) {
                ctx.beginPath();
                ctx.moveTo(0, globalRadius * -1);
                ctx.lineTo(0, globalRadius * -1 + tickHeight - 3);
                ctx.closePath();
                ctx.stroke();
            }
            ctx.rotate(Math.PI / 30);
        }
        ctx.restore();
        this._drawPointer();
    }

    _drawPointer() {
        let date = new Date();
        let hour = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();
        let _hour = hour >= 12 ? hour - 12 : hour;
        let {
            ctx,
            secLineWidth,
            minLineWidth,
            houLineWidth,
            globalRadius,
            originX,
            originY
        } = this;
        ctx.save();
        ctx.translate(originX, originY);
        let hourAngle = (_hour + Math.floor(min / 60)) * 30 * Math.PI / 180;
        let minAngle = min * 6 * Math.PI / 180;
        let secAngle = sec * 6 * Math.PI / 180;
        ctx.lineWidth = houLineWidth;
        ctx.rotate(hourAngle);
        ctx.beginPath();
        ctx.moveTo(0, 5);
        ctx.lineTo(0, globalRadius * -0.5);
        ctx.closePath();
        ctx.stroke();
        ctx.restore();

        ctx.save();
        ctx.translate(originX, originY);
        ctx.lineWidth = minLineWidth;
        ctx.rotate(minAngle);
        ctx.beginPath();
        ctx.moveTo(0, 5);
        ctx.lineTo(0, globalRadius * -0.7);
        ctx.closePath();
        ctx.stroke();
        ctx.restore();

        ctx.save();
        ctx.translate(originX, originY);
        ctx.lineWidth = minLineWidth;
        ctx.strokeStyle = 'red';
        ctx.rotate(secAngle);
        ctx.beginPath();
        ctx.moveTo(0, 10);
        ctx.lineTo(0, globalRadius * -0.9);
        ctx.closePath();
        ctx.stroke();
        ctx.rotate(secAngle * -1);
        ctx.restore();
    }
}