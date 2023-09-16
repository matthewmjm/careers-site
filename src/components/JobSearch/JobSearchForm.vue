<template>
  <form class="flex h-12 w-full items-center rounded-3xl border border-solid border-brand-gray-3">
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />
    <div class="flex flex-1 flex-nowrap h-full text-base font-light">
      <div class="flex h-full flex-1 relative items-center pr-3">
        <label class="absolute left-0 -top-10">Role</label>
        <text-input 
          placeholder="Software Engineer" 
          @handle-input="updateRole"
        />
      </div>
      
      <span 
      class="flex h-full items-center border-l border-r border-brand-gray-3 bg-brand-gray-2 px-3"
      >
      in
    </span>
    <div class="flex h-full flex-1 relative items-center pl-3">
      <label class="absolute left-0 -top-10">Where?</label>
      <text-input 
        placeholder="Denver, CO" 
        @handle-input="updateLocation"
      />
    </div>
    </div>
    <ActionButton 
      text="Search"     
      type="secondary" 
      class="rounded-r-3xl" 
    />
  </form>
</template>

<script setup>
import { ref } from "vue";
import ActionButton from "@/components/Shared/ActionButton.vue";
import TextInput from "@/components/Shared/TextInput.vue";

const role = ref("");
const location = ref("");

function updateRole(value) {
  role.value = value;
  console.log(role.value);
}

function updateLocation(value) {
  location.value = value;
  console.log(location.value);
}

</script>

<style scoped></style>