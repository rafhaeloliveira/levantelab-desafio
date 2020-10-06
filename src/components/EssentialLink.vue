<template>
  <q-item
    clickable
    tag="a"
    :href="link"
  >
    <q-item-section
      class="icon-content"
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label class="item-label">
        {{ title }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
  .icon-content {
    min-width: inherit;
    margin-right: 10px;
  }

  .item-label {
    font-size: 18px;
  }
</style>
