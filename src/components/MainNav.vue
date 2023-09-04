<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div
        class="border-brand-gray-1 mx-auto flex h-full flex-nowrap border-b border-solid px-8"
      >
        <a :href="url" class="flex h-full items-center text-xl"
          >{{ company }} Careers</a
        >
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li class="h-full first:ml-0 ml-9" v-for="menuItem in menuItems" :key="menuItem">
              <a href="" class="flex h-full items-center py-2.5">{{ menuItem }}</a>
            </li>
            <!-- <li class="h-full ml-9">
              <a :href="urlLocations" class="flex h-full items-center py-2.5">Locations</a>
            </li>
            <li class="h-full ml-9">
              <a :href="urlBenefits" class="flex h-full items-center py-2.5">Benefits</a>
            </li>
            <li class="h-full ml-9">
              <a :href="urlJobs" class="flex h-full items-center py-2.5">Jobs</a>
            </li>
            <li class="h-full ml-9">
              <a :href="urlStudents" class="flex h-full items-center py-2.5">Students</a>
            </li> -->
          </ul>

        </nav>
        <div class="flex items-center h-full ml-auto">
          <profile-image v-if="isLoggedIn" />
          <action-button v-else @click="logInUser" text="Sign In" type="primary"/>
        </div>
      </div>
      <sub-nav v-if="isLoggedIn"/>
    </div>
  </header>
</template>

<script setup>
import { computed, ref } from "vue";
import ActionButton from "@/components/ActionButton.vue";
import ProfileImage from "@/components/ProfileImage.vue";
import SubNav from "@/components/SubNav.vue";

const company = "FacePlace";
const menuItems = [
  "Teams",
  "Locations",
  "Benefits",
  "Jobs",
  "Students",
];
const url = "https://careers.google.com/";
const urlTeams = "https://careers.google.com/teams/";
const urlLocations = "https://careers.google.com/locations/";
const urlBenefits = "https://careers.google.com/benefits/";
const urlJobs = "https://www.google.com/about/careers/applications/jobs/results/";
const urlStudents = "https://careers.google.com/students/";
const isLoggedIn = ref(false);

const headerHeightClass = computed(() => {
  return isLoggedIn.value ? "h-32" : "h-16";
});

function logInUser() {
  isLoggedIn.value = !isLoggedIn.value;
}
</script>
