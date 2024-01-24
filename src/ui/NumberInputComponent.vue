<script setup>
import { ref } from 'vue'

defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  label: String
})

const validNumber = ref(true)
// eslint-disable-next-line vue/valid-define-emits

const handleInput = (event) => {
  validNumber.value = true
  const regex = /^[0-9]*$/
  let isValid = regex.test(event.target.value)
  if (isValid) {
    emit('update:modelValue', event.target.value)
  } else {
    validNumber.value = false
  }
}
</script>

<template>
  <div>
    <v-text-field
      type="text"
      :value="modelValue"
      @input="handleInput"
      :placeholder="label"
      v-bind="$attrs"
    />
    <p class="text" v-if="!validNumber">Faqat son kiritishingiz mumkin!</p>
  </div>
</template>

<style scoped>
.ui-input {
  width: 400px;
  height: 30px;
}
.text {
  font-size: 14px;
  color: red;
}
</style>
