export function rect(ctx) {
    ctx.clearRect(0, 0, 500, 500);
    ctx.fillRect(20, 20, 100, 100);
    ctx.fillStyle = 'red';
    ctx.save();
    ctx.fillRect(100, 100, 50, 50);
    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(120, 120, 50, 50);
    ctx.restore();
    ctx.clearRect(40, 40, 60, 60);
    ctx.lineJoin = 'round';
    ctx.strokeRect(50, 50, 40, 40);
}

export function text(ctx) {
    ctx.clearRect(0, 0, 500, 500);
    ctx.font = '20px Microsoft Yahei';
    ctx.textAlign = 'start';
    ctx.save();
    ctx.fillText('我把坐标当做起点', 50, 50);

    ctx.font = '35px Microsoft Yahei';
    ctx.textAlign = 'end';
    ctx.textBaseline = 'baseline'
    ctx.direction = 'rtl'; //实验中的api，低版本浏览器不支持
    let text = ctx.measureText('Hello word!');
    console.log(text);
    ctx.strokeText('我把坐标当做终点', 300, 100)
    ctx.restore();
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowColor = '#999';
    ctx.shadowBlur = 5;
    ctx.fillText('上面的文字宽度为' + text.width + 'px', 50, 140)
}

export function path(ctx) {
    ctx.clearRect(0, 0, 500, 500);
    ctx.beginPath();
    ctx.arc(75,75, 30, 0 , Math.PI * 1.3, true);

    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // 绘制
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false);   // 口(顺时针)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // 左眼
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // 右眼
    ctx.stroke();


}