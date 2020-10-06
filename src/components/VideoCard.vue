<template>
    <q-card class="video-card" flat>
        <!-- Video -->
        <q-video
            class="video-card-iframe"
            src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
            :ratio='4/3'
        />

        <!-- Description -->
        <q-item clickable tag="a" href="#/video-details">
            <div class="video-description">
                Get Ready Fast For Fall
                Leaf Viewing Tripes
            </div>
        </q-item>

        <!-- Category -->
        <q-item clickable tag="a" href="#/video-details">
            <div class="video-category">
                Travel
            </div>
        </q-item>
    </q-card>
</template>

<script>
export default {
    name: 'VideoCard'
}
</script>

<style lang="scss">
    .video-card{
        width: calc(50% - 10px);
        margin-bottom: 20px;
    }

    .video-card-iframe{
        border-radius: 10px !important;
    }

    .video-description{
        font-size: 16px;
        font-weight: 500;
        color: #757575;
        margin-top: 10px;
        margin-bottom: 5px;
    }

    .video-category{
        font-size: 14px;
        color: #757575;
    }

</style>
