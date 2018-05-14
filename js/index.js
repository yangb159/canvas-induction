var canvas = document.getElementById('demo1');

if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    console.log(ctx)
    ctx.fillStyle = 'red';
    ctx.fillRect(30, 30, 50, 50)
    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)'
    ctx.fillRect(50, 50, 50, 50)
    ctx.save();
} else {
    console.log('no support')
}