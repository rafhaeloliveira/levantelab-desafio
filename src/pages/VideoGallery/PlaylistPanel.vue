<template>
    <q-page>
        <div class="video-list full-width row wrap justify-between items-start content-start">
            <!-- Video List -->
            <VideoCard />
            <VideoCard />
        </div>
    </q-page>
</template>

<script>
    import VideoCard from 'components/VideoCard'

    export default {
        components: { VideoCard },
        name: 'PlaylistPanel'
    }
</script>

<style lang="scss">
</style>
