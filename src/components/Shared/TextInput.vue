<template>
  <input
    type="text" 
    :value="inputValue"
    class="w-full text-lg font-normal focus:outline-none"
    @input="handleInputValue"
/>
</template>

<script setup>
import { ref } from "vue";
const inputValue = ref("");
const emit = defineEmits(["handleInput"]);

function handleInputValue($event) {
  inputValue.value = $event.target.value;
  emit("handleInput", inputValue.value);
}

</script>