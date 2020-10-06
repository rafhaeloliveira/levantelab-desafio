<template>
  <q-page>
    <!-- Video -->
    <q-video
      class="main-video-card-iframe"
      src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
      :ratio="4/3"
    />

    <!-- Description -->
    <div class="video-detail-description row vertical-middle">
      <div class="col-2 vertical-middle">
        <q-avatar size="70px">
          <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
        </q-avatar>
      </div>
      <div class="video-detail-title col-6 vertical-middle">
        Maud Conner
        <br>
        76k Views
      </div>
      <div class="col-4">
        <q-btn outline rounded label="Subscribe" />
      </div>
    </div>

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
    components: { VideoCard }
    // name: 'PageName',
  }
</script>

<style lang="scss">
  .main-video-card-iframe{
    // margin-bottom: 20px;
  }
  .video-detail-description{
    padding: 30px 20px;
  }
  .video-detail-title{
    font-size: 18px;
    font-weight: 500;
    padding: 0 20px;
  }
</style>
