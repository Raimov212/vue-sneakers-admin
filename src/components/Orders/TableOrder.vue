<script setup>
defineProps({
  orders: Array
})
</script>

<template>
  <v-table theme="light" height="600px">
    <thead>
      <tr>
        <th class="text-left">OrderId</th>
        <th class="text-left">ProductId</th>
        <th class="text-left">Name</th>
        <th class="text-left">Calories</th>
        <th class="text-left">Total</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in orders" :key="item.name">
        <td>{{ item.id }}</td>
        <td>
          <div>
            {{ item.order[0].id }}
          </div>
          <div>
            {{ item?.order[1]?.id }}
          </div>
        </td>
        <td>
          <div>
            {{ item.order[0].title }}
          </div>
          <div>
            {{ item?.order[1]?.title }}
          </div>
        </td>
        <td>
          <v-img
            class="bg-white"
            width="32"
            :aspect-ratio="1"
            :src="item.order[0].image"
            cover
          ></v-img>
          <v-img
            class="bg-white"
            width="32"
            :aspect-ratio="1"
            :src="item?.order[1]?.image"
            cover
          ></v-img>
        </td>
        <td>{{ item.total }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<style scoped>
.td {
  display: flex;
  flex-direction: column;
}
</style>
