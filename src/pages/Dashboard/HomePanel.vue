<template>
    <q-page>
        <!-- Main Video -->
        <MainVideo :info="videosList[0]" />

        <!-- Video List -->
        <div class="video-list full-width row wrap justify-between items-start content-start">
            <VideoCard :info="video" v-for="video in videosList" v-bind:key="video.tag"/>
        </div>
    </q-page>
</template>

<script>
    import VideoCard from 'components/VideoCard'
    import MainVideo from 'components/MainVideo'

    // Mockup
    import videosList from './../../mockup/videos-list'

    export default {
        components: { VideoCard, MainVideo },
        name: 'HomePanel',
        data () {
            return {
                videosList: videosList
            }
        }
    }
</script>

<style lang="scss">
    .video-list{
        padding: 0 10px;
    }
</style>
