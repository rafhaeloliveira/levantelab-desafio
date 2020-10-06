<template>
    <q-card class="video-card" flat>
        <!-- Video -->
        <q-img
            class="video-card-thumbnail"
            :src="info.thumbnail"
            :ratio='4/3'
        >
            <q-icon size="40px" class="thumbnail-icon absolute-center" name="play_circle_outline" />
        </q-img>

        <!-- Description -->
        <q-item clickable tag="a" href="#/video-details">
            <div class="video-description">
                {{info.title}}
            </div>
        </q-item>

        <!-- Category -->
        <q-item clickable tag="a" href="#/video-details">
            <div class="video-category">
                {{info.tag}}
            </div>
        </q-item>
    </q-card>
</template>

<script>
export default {
    name: 'VideoCard',
    props: ['info']
}
</script>

<style lang="scss">
    .video-card{
        width: calc(50% - 10px);
        margin-bottom: 20px;

        .q-item {
            padding: 0;
        }
    }

    .video-card-thumbnail{
        border-radius: 10px !important;
    }

    .thumbnail-icon {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .1);
        color: $primary;
    }

    .video-description{
        font-size: 18px;
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
