<script setup>
import { useTodosStore } from '@/stores/todos.store'
import { ref } from 'vue'
import EditProductsVue from '../Product/EditProducts.vue'

const show = ref(false)

const { toggleWatched, deleteTodo } = useTodosStore()

defineProps({
  id: String,
  imageUrl: String,
  title: String,
  price: Number,
  isWatched: Boolean,
  allTodos: Array
})
</script>

<template>
  <v-card class="mx-auto container" max-width="300">
    <!-- edit product start-->
    <v-row justify="space-around">
      <v-col cols="auto">
        <v-dialog transition="dialog-bottom-transition" width="auto">
          <template v-slot:activator="{ props }">
            <img class="edit-svg" v-bind="props" src="/edit-card.svg" />
          </template>
          <template v-slot:default="{ isActive }">
            <v-card class="add-to-card">
              <!-- <v-toolbar color="primary" title="Add Product"></v-toolbar> -->
              <v-card-text>
                <div class="text-h2 pa-12">
                  <EditProductsVue :allTodos="allTodos" :itemId="id" />
                </div>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn variant="text" @click="isActive.value = false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
    </v-row>
    <!-- edit product end-->

    <v-img :src="imageUrl" height="200px" cover></v-img>

    <v-card-title> {{ title }} </v-card-title>

    <v-card-subtitle class="subtitle">
      <div class="price-text">
        <p class="dark:text-white">Цена :</p>
        <b class="dark:text-white">{{ price }}$</b>
      </div>
      <div>
        <img class="delete-svg" src="/delete.svg" @click="deleteTodo(id)" />
      </div>
    </v-card-subtitle>

    <div class="btn-scope">
      <div>
        <v-btn color="orange-lighten-2" variant="text" v-if="isWatched" @click="toggleWatched(id)"
          >Watched</v-btn
        >
        <v-btn color="orange-lighten-2" variant="text" v-else @click="toggleWatched(id)"
          >Unwatched</v-btn
        >
      </div>
      <v-card-actions>
        <v-btn class="arrow-button" @click="show = !show">
          <img class="image" src="/arrow-bottom.svg" alt="" />
        </v-btn>
      </v-card-actions>
    </div>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't
          have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll
          go with that data file! Hey, you add a one and two zeros to that or we walk! You're going
          to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<style scoped>
.container {
  position: relative;
}
.edit-svg {
  width: 24px;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
  cursor: pointer;
}
.btn-scope {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.subtitle {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.delete-svg {
  width: 24px;
  cursor: pointer;
}
.delete-svg:hover {
  scale: 1.1;
  transition: 0.2s all ease-in-out;
}
.price-text {
  display: flex;
  gap: 10px;
}
.image {
  width: 32px;
  height: 32px;
}
</style>
