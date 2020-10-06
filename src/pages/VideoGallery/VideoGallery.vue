<template>
  <q-page>
    <!-- content -->
    <div class="col-4">
      <!-- Tabs -->
      <q-tabs
        v-model="tab"
        inline-label
        :breakpoint="0"
        align="justify"
        class="dashboard-tab"
      >
        <q-tab name="latest" label="Latest" />
        <q-tab name="popular" label="Popular" />
        <q-tab name="playlist" label="Playlist" />
      </q-tabs>

      <!-- Panels -->
      <q-tab-panels v-model="tab" animated>
        <!-- Panel 1 -->
        <q-tab-panel class="tab-panel" name="latest">
          <LatestPanel />
        </q-tab-panel>

        <!-- Panel 2 -->
        <q-tab-panel class="tab-panel" name="popular">
          <PopularPanel />
        </q-tab-panel>

        <!-- Panel 3 -->
        <q-tab-panel class="tab-panel" name="playlist">
          <PlaylistPanel />
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </q-page>
</template>

<script>
import LatestPanel from './LatestPanel'
import PopularPanel from './PopularPanel'
import PlaylistPanel from './PlaylistPanel'

export default {
  components: { LatestPanel, PopularPanel, PlaylistPanel },
  data () {
    return {
      tab: 'latest'
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
</style>
