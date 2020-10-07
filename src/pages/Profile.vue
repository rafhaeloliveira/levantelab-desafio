<template>
  <q-page>
    <!-- content -->
    <div class="top-container col-4 relative-position">
      <!-- Imagem do perfil -->
      <q-img
        src="https://steamuserimages-a.akamaihd.net/ugc/874125464626347514/B1DC3E2417EC95E640C0FE5164ABC1CB68479379/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
        :ratio="1"
      >
        <div class="absolute-bottom profile-container">
          <p class="profile-name">Lizzie Aguilar</p>
          <p class="profile-role">Video Editor</p>
        </div>
      </q-img>

      <!-- Dados do perfil -->
      <q-btn-group class="absolute-center btn-group-center">

        <q-btn color="primary" no-caps>
          <span class="btn-group-value">231</span>
          <br>
          <span class="btn-group-label">Likes</span>
        </q-btn>
        <q-btn to="/following" color="primary" no-caps>
          <span class="btn-group-value">627</span>
          <br>
          <span class="btn-group-label">Following</span>
        </q-btn>
        <q-btn color="primary" no-caps>
          <span class="btn-group-value">546</span>
          <br>
          <span class="btn-group-label">Followers</span>
        </q-btn>
      </q-btn-group>
    </div>

    <div class="col-4 relative-position">
      <!-- Lista de videos -->
      <div class="video-list full-width row wrap justify-between items-start content-start">
        <!-- Video List -->
        <VideoCard :info="video" v-for="video in videosList" v-bind:key="video.tag"/>
      </div>
    </div>
  </q-page>
</template>

<script>
  import VideoCard from 'components/VideoCard'

  // Mockup
  import videosList from './../mockup/videos-list'

  export default {
    components: { VideoCard },
    data () {
      return {
        videosList
      }
    }
  }
</script>

<style lang="scss">
  .btn-group-center{
    top: inherit;
    bottom: -25%;

    .q-btn__wrapper {
      padding: 15px 25px;
    }
  }

  .btn-group-value{
    font-size: 21px;
    margin-bottom: 5px;
  }

  .btn-group-label{
    font-size: 14px;
  }

  .profile-container {
    background-color: transparent !important;
    background-image: linear-gradient( rgba(85, 85, 85, .0), rgba(85, 85, 85, .77)) !important;
    padding: 30px !important;
  }

  .profile-name{
    color: #FFF;
  }

  .profile-role{
    color: #FFF;
  }

  .top-container {
    margin-bottom: 90px;
  }

  .video-list {
    padding: 0 25px;
  }
</style>
