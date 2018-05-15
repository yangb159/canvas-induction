<template>
    <div>
        <canvas id="myCanvas"></canvas>
    </div>
</template>

<script>
    import {rect} from "./demos/basic";

    export default {
        data() {
            return {
                ctx: null
            }
        },
        methods: {
            draw() {
                let {ctx} = this;
                rect(ctx);
            }
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