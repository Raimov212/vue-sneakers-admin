<script setup>
import { useTodosStore } from '../stores/todos.store'
import CardView from '../components/Card/card-view.vue'
import { onMounted } from 'vue'

const store = useTodosStore()

const { fetchData, toggleWatched } = store

onMounted(async () => {
  await fetchData()
  await toggleWatched()
})
</script>

<template>
  <div>
    <CardView />
  </div>
</template>
