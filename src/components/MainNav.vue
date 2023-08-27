<template>
  <header class="w-full text-sm">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div
        class="border-brand-gray-1 mx-auto flex h-full flex-nowrap border-b border-solid px-8"
      >
        <a href="/" class="flex h-full items-center text-xl"
          >{{ company }} Careers</a
        >
      </div>
    </div>
  </header>
</template>

<script setup>
const company = "FacePlace";
</script>
