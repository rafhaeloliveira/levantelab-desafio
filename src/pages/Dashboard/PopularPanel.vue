<template>
    <q-page>
        <!-- Main Video -->
        <MainVideo />

        <div class="video-list full-width row wrap justify-between items-start content-start">
            <!-- Video List -->
            <VideoCard />
            <VideoCard />
        </div>
    </q-page>
</template>

<script>
    import VideoCard from 'components/VideoCard'
    import MainVideo from 'components/MainVideo'

    export default {
        components: { VideoCard, MainVideo },
        name: 'PopularPanel'
    }
</script>

<style lang="scss">
    .video-list{
        padding: 0 10px;
    }
</style>
