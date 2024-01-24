<script setup>
import { ref } from 'vue'
import UiTextInputComponent from '../../ui/TextInputComp.vue'
import UiNumberInputComponent from '../../ui/NumberInputComponent.vue'
import { useTodosStore } from '../../stores/todos.store'

const { addTodoProduct } = useTodosStore()

const inputTitle = ref('')
const inputPrice = ref(null)
const inputImage = ref('')

const addProduct = () => {
  const obj = {
    title: inputTitle.value,
    image: inputImage.value,
    price: inputPrice.value,
    isFavorite: false,
    isAdded: false,
    isWatched: true
  }
  addTodoProduct(obj)
}
</script>

<template>
  <h6>Add Product</h6>
  <v-form @submit.prevent="addProduct">
    <UiTextInputComponent v-model="inputTitle" :label="'Product name'" />
    <UiNumberInputComponent v-model="inputPrice" :label="'Product price'" />
    <UiTextInputComponent v-model="inputImage" :label="'Product image'" />
    <!-- <UiInputComponent v-model="inputTitle" :label="'Product name'" /> -->
    <v-btn type="submit">Save</v-btn>
  </v-form>
</template>

<style lang="scss" scoped></style>
