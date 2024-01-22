<script lang="ts">
import { RouterList } from '../router'
import { onMounted, reactive, ref, watchEffect, type Ref } from 'vue'
import type { RouteType } from '../types/route'

export default {
  data() {
    return {
      RouterList: RouterList as RouteType[]
    }
  },
  setup() {
    const user: Ref<{
      email: string
      fullName: string
    }> = ref({
      fullName: 'User',
      email: 'user@gmail.com'
    })

    const dateTime = reactive({
      year: '',
      month: '',
      day: ''
    })

    const storage = JSON.parse(localStorage.getItem('user') as string) ?? ''

    watchEffect(
      () => (
        (user.value.fullName =
          storage.fullName == undefined || storage.fullName === '' ? 'user' : storage.fullName),
        (user.value.email =
          storage.fullName == undefined || storage.email === '' ? 'user@gmail.com' : storage.email)
      )
    ),
      onMounted(() => {
        const date = new Date()

        dateTime.year = date.toLocaleString('default', { year: 'numeric' })
        dateTime.month = date.toLocaleString('default', { month: '2-digit' })
        dateTime.day = date.toLocaleString('default', { day: '2-digit' })
      })

    return { user, dateTime }
  },
  methods: {
    signOut() {
      localStorage.removeItem('user')
      this.$router.push('/auth')
    }
  }
}
</script>

<template>
  <div class="container">
    <v-card class="sidebar">
      <v-layout>
        <v-navigation-drawer expand-on-hover rail>
          <v-list>
            <v-list-item :title="user.fullName" :subtitle="user.email"></v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list density="compact" nav>
            <router-link
              class="route"
              v-for="(item, index) in RouterList"
              :key="index"
              :to="item.path"
            >
              <v-list-item :title="item.title" :value="item.title"> </v-list-item>
            </router-link>

            <v-list-item>
              <v-btn @click="signOut" class="btn" variant="outlined">Sign Out </v-btn>
            </v-list-item>
            <v-list-item>
              <div v-if="this.dateTime.day" class="date">
                {{ dateTime.day }}/{{ dateTime.month }}/{{ dateTime.year }}
              </div>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-layout>
    </v-card>
    <router-view class="main"></router-view>
  </div>
</template>

<style scoped>
.container {
  display: flex;
}

.route {
  outline: none;
  text-decoration: none;
  color: black;
  text-align: center;
}
.sidebar {
  width: auto;
  z-index: 10;
}
.main {
  width: 100%;
  height: 100vh;
  padding: 10px 60px;
}
.btn {
  margin-top: 100%;
  margin-left: 30px;
}
.date {
  margin-left: 40px;
}
</style>
