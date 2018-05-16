export default class circle {
    constructor(ctx, data) {
        this.ctx = ctx;
        this.radius = 100;
        this.originX = 250;
        this.originY = 250;
        this.setData(data);
    }

    setData(data) {
        this.total = data.reduce((total, current) => {
            return total + current.value
        }, 0)
    }
    draw(data) {
        let {ctx, originX, originY} = this;
        ctx.clearRect(0, 0, 500, 500);
        ctx.arc()
    }
}
