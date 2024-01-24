<script setup>
defineProps({
  users: Array
})
</script>

<template>
  <v-table theme="light" height="600px">
    <thead>
      <tr>
        <th class="text-left">UserId</th>
        <th class="text-left">Name</th>
        <th class="text-left">Email</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in users" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.fullName }}</td>
        <td>{{ item.email }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<style scoped></style>
