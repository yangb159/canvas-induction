<template>
    <div>
        <canvas id="myCanvas" width="500" height="500"></canvas>
    </div>
</template>

<script>
    import {rect, text, path} from "./demos/basic";

    export default {
        data() {
            return {
                ctx: null,
            }
        },
        methods: {
            draw() {
                let {ctx} = this;
                rect(ctx);
                text(ctx);
                path(ctx);
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