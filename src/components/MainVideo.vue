<template>
    <q-card class="main-video-card" flat>
        <!-- Video -->
        <q-video
            class="main-video-card-iframe"
            src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
            :ratio="4/3"
        />
        <!-- Description -->
        <q-item clickable tag="a" href="#/video-details">
            <div class="main-video-description">
                Stair Lifts Feel The Freedom Of Your Home
            </div>
        </q-item>

        <!-- Category -->
        <q-item clickable tag="a" href="#/video-details">
            <div class="main-video-category">
                Decoration
            </div>
        </q-item>
    </q-card>
</template>

<script>
    export default {
        name: 'MainVideo'
    }
</script>

<style lang="scss">
    .main-video-card{
        border-radius: 0;
        margin-bottom: 30px;
    }

    .main-video-description{
        font-size: 21px;
        line-height: 1.5;
        padding: 0 20px;
        margin-top: 10px;
    }

    .main-video-category{
        font-size: 16px;
        padding: 0 20px;
        margin-top: 10px;
    }
</style>
