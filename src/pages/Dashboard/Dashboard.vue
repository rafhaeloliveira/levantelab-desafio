<template>
  <q-page>
    <!-- Tabs -->
    <div class="col-4">
      <q-tabs
        v-model="tab"
        inline-label
        :breakpoint="0"
        align="justify"
        active-color="primary"
      >
        <q-tab name="home" label="Home" />
        <q-tab name="trending" label="Trending" />
        <q-tab name="popular" label="Popular" />
        <q-tab name="playlist" label="Playlist" />
      </q-tabs>

      <!-- Panels -->
      <q-tab-panels v-model="tab" animated>
        <!-- Panel 1 -->
        <q-tab-panel class="tab-panel" name="home">
          <HomePanel />
        </q-tab-panel>

        <!-- Panel 2 -->
        <q-tab-panel class="tab-panel" name="trending">
          <TrendingPanel />
        </q-tab-panel>

        <!-- Panel 3 -->
        <q-tab-panel class="tab-panel" name="popular">
          <PopularPanel />
        </q-tab-panel>

        <!-- Panel 4 -->
        <q-tab-panel class="tab-panel" name="playlist">
          <PlaylistPanel />
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </q-page>
</template>

<script>
import HomePanel from './HomePanel'
import PlaylistPanel from './PlaylistPanel'
import PopularPanel from './PopularPanel'
import TrendingPanel from './TrendingPanel'

export default {
  components: { HomePanel, PlaylistPanel, PopularPanel, TrendingPanel },
  data () {
    return {
      tab: 'home'
    }
  }
}
</script>

<style lang="scss">
  .dashboard-tab {
    .q-tab__indicator {
      background-color: $primary;
    }
  }

  .tab-panel{ padding: 0; }
</style>
