<script setup>
import { useUserStore } from '@/stores/users.store'
import { computed, onMounted } from 'vue'
import TableUser from '../components/Users/TableUser.vue'

const store = useUserStore()

const { fetchDataUser } = store

onMounted(async () => {
  await fetchDataUser()
})

const users = computed(() => store.users)
</script>

<template>
  <div class="container">
    <TableUser :users="users" />
  </div>
</template>

<style scoped>
.container {
  margin: 20px;
}
</style>
