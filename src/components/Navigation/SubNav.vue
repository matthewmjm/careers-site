<template>
  <div class="w-full h-16 border-b border-solid border-brand-gray-1 bg-white" >
    <div class="flex items-center h-full px-8">
      <div v-if="onJobResultsPage">
      <font-awesome-icon :icon="['fas', 'search']" class="mr-3"/>
        <span>
          <span class="text-brand-green-1">1653</span>
          jobs matched
        </span>
      </div>
    </div >
  </div>
</template>

<script setup>
import { ref } from "vue";

const onJobResultsPage = true;

</script>
<styles scoped></styles>