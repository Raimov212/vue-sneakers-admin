<script setup>
import { useUserStore } from '@/stores/users.store'
import { computed, onMounted, ref } from 'vue'
import TableUser from '../components/Users/TableUser.vue'
import { getAuth } from 'firebase/auth'
import axios from 'axios'
import { watch } from 'vue'

const clientUser = ref([])

const store = useUserStore()

const { fetchDataUser } = store

const getUserClientFirebase = () => {
  getAuth().onAuthStateChanged((user) => {
    user.providerData.forEach((item) => {
      clientUser.value.push(item)
    })
  })
}
const getUserClientMokky = async () => {
  try {
    const { data } = await axios.get('https://1f80988ef93046ce.mokky.dev/users')
    if (data) {
      return data.forEach((item) => {
        clientUser.value.push(item)
      })
    }
  } catch (error) {
    console.log(error)
  }
}

onMounted(async () => {
  await fetchDataUser()
  await getUserClientFirebase()
  await getUserClientMokky()
})
</script>

<template>
  <div class="container">
    <TableUser :users="store.users" :clientUser="clientUser" />
  </div>
</template>

<style scoped>
.container {
  margin: 20px;
}
</style>
