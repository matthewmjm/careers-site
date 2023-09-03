<template>
  <button 
    @click="handleClick" 
    :class="buttonClass"
  >
    {{ text }}
  </button>
</template>

<script setup>
import { ref, computed } from "vue";
const props = defineProps({
  text: String,
  type: String,
});

const buttonClass =  computed(() => {
  return {
    [props.type]: true,
  }
})

function handleClick(event) {
  console.log("Action Button is Clicked");
  console.log("Event Object: ", event);
}

</script>

<style scoped>
button {
  @apply rounded px-5 py-3 font-medium;
}

.primary {
  @apply border-0 bg-brand-blue-1 text-white hover:shadow-blue;
}

.secondary {
  @apply bg-transparent text-brand-blue-1 hover:bg-brand-blue-2 hover:text-white;
}


</style>