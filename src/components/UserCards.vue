<template>
    <q-card class="card bg-primary text-white">
        <!-- Avatar Section -->
        <q-card-section>
            <q-avatar size="70px">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            <p class="profile-name">Jared Morrison</p>
            <p class="profile-role">Designer</p>
        </q-card-section>

        <!-- Follow btn section -->
        <q-card-section>
            <q-btn outline rounded label="Unfollow" />
        </q-card-section>
    </q-card>
</template>

<script>
    export default {
        name: 'UserCard'
    }
</script>

<style lang="scss">
    .card {
        width: calc(50% - 10px);
        max-width: 200px;
        margin-bottom: 10px;
        background-color: $primary;
        text-align: center;

        .q-avatar {
            margin-bottom: 10px;
        }

        .profile-name {
            font-size: 18px;
            max-height: 26px;
            overflow: hidden;
        }

        .profile-role {
            font-size: 14px;
        }
    }
</style>
