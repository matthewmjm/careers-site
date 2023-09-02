<template>
  <button 
    @click="handleClick" 
    class="rounded border-0 px-5 py-3 font-medium text-white bg-brand-blue-1 hover:shadow-blue"
  >
    Sign In
  </button>
</template>

<script setup>

function handleClick(event) {
  console.log("Action Button is Clicked");
  console.log("Event Object: ", event);
}

</script>

<style scoped>

</style>