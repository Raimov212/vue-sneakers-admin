<script>
import LoginView from '../auth/LoginView.vue'
import RegisterView from '../auth/RegisterView.vue'

export default {
  data: () => ({
    tab: null
  }),
  components: {
    LoginView,
    RegisterView
  }
}
</script>

<template>
  <div class="w-full h-full d-flex justify-center">
    <v-card class="card">
      <v-tabs class="card-item" v-model="tab" bg-color="primary">
        <v-tab value="one">Sign In</v-tab>
        <v-tab value="two">Sign Up</v-tab>
      </v-tabs>

      <v-card-text>
        <v-window v-model="tab">
          <v-window-item value="one"> <login-view></login-view> </v-window-item>

          <v-window-item value="two"> <register-view></register-view> </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped>
.card {
  width: 400px;
  height: 400px;
  margin-top: 150px;
}
.card .card-item {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
