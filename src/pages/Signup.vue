<template>
  <!-- TODO: Image Background é um Carolsel -->
  <q-page class="bg-image-login">
    <div class="q-pa-md">
      <div class="column">
        <div class="col column">
          <h2 class="login-title">Cadastro</h2>
        </div>

        <div class="col column">
          <q-input class="input-text " v-model="email" label="Email" />
          <q-input class="input-text " v-model="nome" label="Nome Completo" />
          <q-input class="input-text " v-model="password" label="Password" />
          <q-input class="input-text " v-model="confirmPassword" label="Confirme seu password" />
        </div>

        <div class="col column">
          <router-link to='/'>
            <q-btn style="margin-top: 20px" class="btn-full-width" rounded color="primary" icon="arrow_forward" />
          </router-link>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      nome: '',
      password: '',
      confirmPassword: ''
    }
  }
}
</script>

<style lang="scss">
  .bg-image-login{
    background-image: url('./../assets/imgs/login-bg.jpg');
    background-size: cover;
    background-position: center bottom;
    background-repeat: no-repeat;

    &:before{
      content: "";
      background-color: rgba(85, 3, 119, .5);
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    div:first-child{
      position: relative;
      z-index: 1;
    }
  }

  .login-title{
    color: #FFF;
    font-size: 31px;
    font-weight: 500;
    text-align: center;
  }
</style>
