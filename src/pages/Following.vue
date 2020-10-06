<template>
  <q-page padding>
    <!-- content -->
    <div class="full-width row wrap justify-around items-start content-start">
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
    </div>
  </q-page>
</template>

<script>
import UserCard from 'components/UserCards.vue'

export default {
  // name: 'PageName',
  components: { UserCard }
}
</script>
