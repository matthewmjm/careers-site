<template>
  <main>
    <section class="flex flex-col h-screen pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-span-1 col-start-1">
        </div>
        <div class="col-span-5 col-start-2">
          <TheHeadline />
          <JobSearchForm />
        </div>
        <div 
          class="col-span-5 col-start-7 self-center justify-self-center"
        >
          <img 
            src="coder.png" 
            alt="Vue.js Logo" 
            class="h-80 w-80 object-contain"
          />
        </div>
        <div class="col-span-1 grid-col-end-12">
      </div>
      </div>
    </section>
  </main>
</template>


<script setup>
import TheHeadline from "@/components/JobSearch/TheHeadline.vue";
import JobSearchForm from "@/components/JobSearch/JobSearchForm.vue";


</script>

<style scoped>


</style>