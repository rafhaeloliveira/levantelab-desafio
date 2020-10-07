<template>
    <q-responsive :ratio="4/3">
        <video class="video" width="100%" height="100%" controls>
            <source src="./../mockup/mov_bbb.mp4" type="video/mp4" />
        </video>
    </q-responsive>
</template>

<script>
    export default {
        name: 'VideoPlayer'
    }
</script>

<style lang="scss">
    .container{
        position: relative;
    }

    .video{
        min-width: 100%;
        min-height: 100%;

        width: auto;
        height: auto;
        background: #000;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
</style>
