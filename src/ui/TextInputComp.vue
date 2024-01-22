<script setup>
defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  label: String
})
</script>

<template>
  <v-text-field
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :placeholder="label"
    v-bind="$attrs"
  />
</template>

<style scoped>
.ui-input {
  width: 400px;
  height: 30px;
}
</style>
