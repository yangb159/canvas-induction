<template>
    <div>
        <canvas id="myCanvas" width="500" height="500"></canvas>
        <div style="display: none"><img src="/src/img/jd.jpg" id="myImg" width="500" height="500" /></div>
    </div>
</template>

<script>
    import {rect, text, path} from "./demos/basic";
    import Clock from './demos/clock'
    import {drawImg, clipImg} from './demos/image'
    import Circle from './demos/circle'
    export default {
        data() {
            return {
                ctx: null,
                circleData: [
                    {key: '京东', value: 500},
                    {key: '天猫', value: 600},
                    {key: '唯品会', value: 200},
                    {key: '拼多多', value: 100},
                    {key: '苏宁', value: 100},
                    {key: '其他', value: 100},
                ]
            }
        },
        methods: {
            draw() {
                let {ctx} = this;
//                rect(ctx);
//                text(ctx);
//                path(ctx);


//                let myClock = new Clock(ctx);
//                let myClock = new Clock(ctx, {animate: true});
//                myClock.draw();


//                drawImg(ctx)
//                drawImg(ctx, 50, 50)

//                clipImg(ctx);

                let myCircle = new Circle(ctx, this.circleData);
                myCircle.config({animate: true, animateTime: 2});
                myCircle.draw()
            },
        },
        created() {

        },
        mounted() {
            let canvas = document.getElementById('myCanvas');
            this.ctx = canvas.getContext('2d');
            this.draw();
        }
    }
</script>