<script setup>
import { useOrderStore } from '@/stores/order.store'
import { computed, onMounted } from 'vue'
import TableOrder from '../components/Orders/TableOrder.vue'

const store = useOrderStore()

const { fetchDataOrder } = store

onMounted(async () => {
  await fetchDataOrder()
})

const orders = computed(() => store.orders)
</script>

<template>
  <div class="container">
    <TableOrder :orders="orders" />
  </div>
</template>

<style scoped>
.container {
  margin: 20px;
}
</style>
