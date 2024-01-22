<script setup>
import { useTodosStore } from '@/stores/todos.store'
import { ref } from 'vue'

const show = ref(false)

const { toggleWatched, deleteTodo } = useTodosStore()

defineProps({
  id: String,
  imageUrl: String,
  title: String,
  price: Number,
  isWatched: Boolean
})
</script>

<template>
  <v-card class="mx-auto" max-width="300">
    <v-img :src="imageUrl" height="200px" cover></v-img>

    <v-card-title> {{ title }} </v-card-title>

    <v-card-subtitle class="subtitle">
      <div class="price-text">
        <p class="dark:text-white">Цена :</p>
        <b class="dark:text-white">{{ price }}$</b>
      </div>
      <img class="delete-svg" src="/delete.svg" @click="deleteTodo(id)" />
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
