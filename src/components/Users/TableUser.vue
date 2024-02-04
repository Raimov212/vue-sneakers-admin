<script setup>
defineProps({
  users: Array,
  clientUser: Array
})
</script>

<template>
  <div class="container">
    {{ console.log('clientUser', clientUser) }}
    <section>
      <h4>Users Admin</h4>
      <v-table theme="light" height="600px">
        <thead>
          <tr>
            <th class="text-left">UserIdss</th>
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
    </section>
    <section>
      <h4>Users Client</h4>
      <v-table theme="light" height="600px">
        <thead>
          <tr>
            <th class="text-left">UserId</th>
            <th class="text-left">Name</th>
            <th class="text-left">Email</th>
            <th class="text-left">Image</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in clientUser" :key="item.id">
            <td>{{ item.providerId }}</td>
            <td>{{ item.displayName }}</td>
            <td>{{ item.email }}</td>
            <td>
              <img :src="item.photoURL" alt="" />
            </td>
          </tr>
        </tbody>
      </v-table>
    </section>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}
</style>
