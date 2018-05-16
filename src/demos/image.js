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
            ctx.drawImage(img, 0, 0)
        }
    }
}


export function clipImg(ctx) {
    ctx.clearRect(0, 0, 500, 500);
    ctx.fillStyle = 'rgba(255, 255, 255, .6)';
    ctx.fillRect(0, 0, 500, 500);
    ctx.strokeStyle = '#666';
    ctx.strokeWidth = 3;
    ctx.strokeRect(0, 0, 500, 500);
}