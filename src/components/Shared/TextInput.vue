<template>
  <input
    type="text" 
    :value="value"
    class="w-full text-lg font-normal focus:outline-none"
    @input="handleInput"
/>
</template>

<script setup>
import { ref } from "vue";
const value = ref("");

function handleInput($event) {
  value.value = $event.target.value;
}

</script>