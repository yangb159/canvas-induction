export function drawImg(ctx, width = 0, height = 0) {
    let img = new Image();
    img.onload = function () {
        if (width && height) {
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 3; j++) {
                    ctx.drawImage(img, width * j, i * height, width, height);
                }
            }
        } else {
            ctx.drawImage(img, 0, 0, 800 ,800)
        }
    };
    img.src = './src/img/jd.jpg'
}


export function clipImg(ctx, ev) {
    ctx.clearRect(0, 0, 500, 500);
    let img = new Image();
    img.onload = function () {
        ctx.drawImage(img, 0, 0, 500, 500);
        ctx.fillStyle = 'rgba(255, 255, 255, .4)';
        ctx.strokeStyle = '#eee';
        ctx.strokeWidth = 1;
        for (let i = 0; i < 50; i++) {
            for (let j = 0; j < 50; j++) {
                ctx.strokeRect(i * 10, j * 10, 10, 10);
            }
        }
        ctx.fillRect(0, 0, 500, 500);
        ctx.strokeStyle = '#666';
        ctx.strokeWidth = 3;
        ctx.beginPath();
        ctx.arc(250, 250, 100, 0 , Math.PI*2);
        ctx.clip();
        ctx.closePath();
        ctx.drawImage(img, 0, 0, 500, 500);
        ctx.stroke();
    };
    img.src = './src/img/jd.jpg';

}