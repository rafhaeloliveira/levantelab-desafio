<template>
  <!-- TODO: Image Background é um Carolsel -->
  <q-page class="bg-image-welcome">
    <div class="q-pa-md">
      <div class="column">
        <div class="col column">
          <router-link to='auth/login'>
            <q-btn class="btn-full-width" rounded color="primary btn-rounded" label="Login" />
          </router-link>
          <router-link to='auth/signup'>
            <q-btn class="btn-full-width" rounded color="primary btn-rounded" label="Cadastro" />
          </router-link>
        </div>

        <div class="col column title-container">
          <h2 class="welcome-title">ShareVid</h2>
          <p class="welcome-description">
            Best Video Sharing Platform around the globe
          </p>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>

<style lang="scss">
  .bg-image-welcome{
    background-image: url('./../assets/imgs/welcome-bg.jpg');
    background-size: 150%;
    background-position: center bottom;
    background-repeat: no-repeat;

    &:before{
      content: "";
      background-color: rgba(0 , 0, 0, .5);
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      z-index: 0;
    }

    div:first-child{
      position: relative;
      z-index: 1;
    }

    @media (min-width: $breakpoint-sm-min){
      background-size: cover;
      background-position: center;
    }
  }

  .title-container {
    margin-top: calc(100% - 125px);
  }

  .welcome-title{
    color: #FFF;
    font-size: 36px;
    text-align: center;
    font-weight: 500;
  }

  .welcome-description{
    color: #FFF;
    font-size: 21px;
    text-align: center;
    line-height: 40px;
    font-weight: 500;
  }
</style>
