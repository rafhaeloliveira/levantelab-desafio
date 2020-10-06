<template>
    <q-card class="main-video-card" flat>
        <!-- Video Thumbnail -->
        <q-img
            class="main-video-card-thumbnail"
            :src="info.thumbnail"
            :ratio='4/3'
        >
            <q-icon size="70px" class="thumbnail-icon absolute-center" name="play_circle_outline" />
        </q-img>

        <div class="row col-12">
            <!-- Description -->
            <div class="column col-10">
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
            </div>
            <!-- Share/Fav -->
            <div class="row col-2">
                <q-icon class="share-icon col-6 vertical-top" size="20px" name="share" />
                <q-icon class="share-icon col-6 vertical-top" size="20px" name="favorite_border" />
            </div>
        </div>
    </q-card>
</template>

<script>
    export default {
        name: 'MainVideo',
        props: ['info']
    }
</script>

<style lang="scss">
    .main-video-card{
        border-radius: 0;
        margin-bottom: 30px;

        .q-item {
            padding: 0;
        }
    }

    .thumbnail-icon {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .1);
        color: $primary;
    }

    .share-icon {
        height: 50px !important;
        color: $primary;
    }

    .main-video-description{
        font-size: 21px;
        font-weight: 500;
        color: #757575;
        line-height: 1.5;
        padding: 0 20px;
        margin-top: 10px;
    }

    .main-video-category{
        font-size: 16px;
        font-weight: 500;
        color: #757575;
        padding: 0 20px;
        margin-top: 10px;
    }
</style>
