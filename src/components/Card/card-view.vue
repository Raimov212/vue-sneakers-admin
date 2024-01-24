<script setup>
import { useTodosStore } from '@/stores/todos.store'
import { computed, ref } from 'vue'
import AddProductsVue from '../Product/AddProducts.vue'
import CardItemView from './card-item-view.vue'

const store = useTodosStore()

const isWatched = ref(true)
const searchProduct = ref('')

const todos = computed(() => {
  return store.todos
})

const updateHandleProduct = () => {
  store.updateProduct(searchProduct.value)
}

const handleWatchedTodos = () => {
  isWatched.value = !isWatched.value
}

const getWatchedTodos = computed(() => {
  return store.watchedTodos
})

const getTotalCountTodos = computed(() => {
  return store.totalCountTodos
})
</script>
<template>
  <div class="container">
    <h1>Todos:</h1>
    <div class="content">
      <div class="input-search">
        <v-text-field v-model="searchProduct" label="Search Todo"></v-text-field>
        <v-btn @click="updateHandleProduct">search</v-btn>
      </div>
      <div class="header">
        <v-btn @click="handleWatchedTodos">
          <p v-if="isWatched">All Todos ({{ getTotalCountTodos }})</p>
          <p v-else>Watched Todos ({{ store.watchedTodos.length }})</p>
        </v-btn>

        <!-- Add todo Component -->

        <v-row justify="space-around">
          <v-col cols="auto">
            <v-dialog transition="dialog-bottom-transition" width="auto">
              <template v-slot:activator="{ props }">
                <v-btn v-bind="props">Add Product</v-btn>
              </template>
              <template v-slot:default="{ isActive }">
                <v-card class="add-to-card">
                  <!-- <v-toolbar color="primary" title="Add Product"></v-toolbar> -->
                  <v-card-text>
                    <div class="text-h2 pa-12"><AddProductsVue /></div>
                  </v-card-text>
                  <v-card-actions class="justify-end">
                    <v-btn variant="text" @click="isActive.value = false">Close</v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
          </v-col>
        </v-row>
      </div>
    </div>

    <!-- Watched Todos -->
    <div>
      <div class="card-box" v-if="isWatched">
        <CardItemView
          v-for="item in todos"
          :key="item.id"
          :id="item.id"
          :imageUrl="item.image"
          :title="item.title"
          :price="item.price"
          :isWatched="item.isWatched"
          :allTodos="todos"
        />
      </div>
      <div class="card-box" v-else>
        <CardItemView
          v-for="item in getWatchedTodos"
          :key="item.id"
          :id="item.id"
          :imageUrl="item.image"
          :title="item.title"
          :price="item.price"
          :isWatched="item.isWatched"
          :allTodos="todos"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 20px;
}

.card-box {
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
}
.input-search {
  width: 400px;
  display: flex;
  gap: 10px;
}
.add-to-card {
  width: 500px;
  height: 500px;
}
.header {
  display: flex;
  gap: 20px;
}
.content {
  display: flex;
  justify-content: space-between;
}

.btn-scope {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
