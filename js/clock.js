function Clock(id, opt) {
    if (!opt) {
        opt = {}
    }
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.width = opt.width || 500;
    this.height = opt.height || 500;
    this.hasSec = opt.hasSec || false;
    this.secLineWidth = opt.secLineWidth || 2;
    this.minLineWidth = opt.minLineWidth || 3;
    this.houLineWidth = opt.houLineWidth || 5;
    this.globalLineWidth = opt.globalLineWidth || 8;
    var dom = document.getElementById(id);
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    dom && dom.appendChild(this.canvas);
    this.setDefault();
    console.log(this)
}
Clock.prototype = {
    setDefault:function () {
        this.origin = Math.floor(Math.max(this.width, this.height) / 2);
        this.originX = this.width - this.origin;
        this.originY = this.height - this.origin;
        this.globalRadius = this.origin - 20 || 10;
    },
    config:function (opt) {

    },
    draw:function () {
        var x = this.originX;
        var y = this.originY;
        var radius = this.globalRadius;
        var ctx = this.ctx;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI*2);
        ctx.strokeStyle = '#000';
        ctx.lineWidth = this.globalLineWidth;
        ctx.closePath();
        ctx.stroke();
        this._drawHourTick();
    },
    _drawHourTick: function () {
        var x = this.originX;
        var y = this.originY;
        var radius = this.globalRadius;
        var ctx = this.ctx;
        for (var i = 0; i < 12 ; i++) {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(i*30*Math.PI/180);
            ctx.lineWidth = i%3 ? this.houLineWidth : this.houLineWidth+2;
            ctx.strokeStyle = '#000';
            ctx.beginPath();
            ctx.moveTo(0, radius*-1);
            ctx.lineTo(0, radius*-1+10);
            ctx.closePath();
            ctx.stroke();
            ctx.restore();
        }
    },
    _drawMinTick: function() {
        var x = this.originX;
        var y = this.originY;
        var radius = this.globalRadius;
        var ctx = this.ctx;
        for (var i = 0; i < 60 ; i++) {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(i*6*Math.PI/180);
            ctx.lineWidth = this.minLineWidth;
            ctx.strokeStyle = '#000';
            ctx.beginPath();
            ctx.moveTo(0, radius*-1);
            ctx.lineTo(0, radius*-1+5);
            ctx.closePath();
            ctx.stroke();
            ctx.restore();
        }
    },
    _drawPointer: function() {

    }
}