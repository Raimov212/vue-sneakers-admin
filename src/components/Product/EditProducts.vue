<script setup>
import { onMounted, ref } from 'vue'
import UiTextInputComponent from '../../ui/TextInputComp.vue'
import UiNumberInputComponent from '../../ui/NumberInputComponent.vue'
import { useTodosStore } from '../../stores/todos.store'

const { editProduct } = useTodosStore()

const props = defineProps({
  allTodos: Array,
  itemId: String
})

let itemCurrentId
const inputTitle = ref('')
const inputPrice = ref(null)
const inputImage = ref('')
// const inputTitle = ref(editAllItems.title)
// const inputPrice = ref(editAllItems.price)
// const inputImage = ref(editAllItems.image)

const editHandleProduct = () => {
  const obj = {
    id: itemCurrentId,
    title: inputTitle.value,
    image: inputImage.value,
    price: inputPrice.value,
    isFavorite: false,
    isAdded: false,
    isWatched: true
  }
  editProduct(itemCurrentId, obj)
}

const toggleProduct = (itemId) => {
  return props.allTodos.map((item) => {
    if (item.id === itemId) {
      inputTitle.value = item.title
      inputPrice.value = item.price
      inputImage.value = item.image
      itemCurrentId = item.id
    }
    return item
  })
}

onMounted(() => {
  toggleProduct(props.itemId)
})
</script>

<template>
  <h6>Edit Product</h6>
  <v-form @submit.prevent="editHandleProduct" class="card-edit-container">
    <UiTextInputComponent v-model="inputTitle" :label="'Product name'" />
    <UiNumberInputComponent v-model="inputPrice" :label="'Product price'" />
    <UiTextInputComponent v-model="inputImage" :label="'Product image'" />
    <!-- <UiInputComponent v-model="inputTitle" :label="'Product name'" /> -->
    <v-btn type="submit">Save</v-btn>
  </v-form>
</template>

<style scoped>
.card-edit-container {
  width: 300px;
}
</style>
