<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="header" elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title class="absolute-center">
          {{ pageTitle }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      content-class="drawer"
    >
        <!-- Profile Info -->
        <div style="height: 170px; padding: 0 20px;">
          <div class="bg-transparent">
            <q-avatar size="80px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="profile-name">John Carter</div>
            <div>Web Developer</div>
          </div>
        </div>

        <!-- Navigation -->
        <q-scroll-area style="height: calc(100% - 170px);">
          <q-list>
            <EssentialLink
              v-for="link in essentialLinks"
              :key="link.title"
              v-bind="link"
            />
          </q-list>
        </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'My Profile',
    icon: 'person',
    link: '#/profile'
  },
  {
    title: 'Activity',
    icon: 'local_activity',
    link: '#/'
  },
  {
    title: 'Notifications',
    icon: 'notifications',
    link: '#/'
  },
  {
    title: 'Friends',
    icon: 'group',
    link: '#/'
  },
  {
    title: 'Messages',
    icon: 'chat',
    link: '#/'
  },
  {
    title: 'Gallery',
    icon: 'collections',
    link: '#/video-gallery'
  },
  {
    title: 'Settings',
    icon: 'settings',
    link: '#/'
  }
]

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
      pageTitle: this.$route.name
    }
  },
  watch: {
    $route ({ name }) {
      this.pageTitle = this.$route.name
    }
  }
}

</script>

<style lang="scss">
  .header {
    height: 70px;

    .q-toolbar{
      height: 100%;
    }
  }

  .drawer {
    background-color: $primary;
    color: #FFF;
    padding: 30px;
  }

  .profile-name {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 5px;
  }
</style>
