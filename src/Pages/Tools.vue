<script setup>
const tools = {
  "https://laravel.com/" : "laravel-2.svg",
  "https://vuejs.org/" : "vue-js-1.svg",
  "https://react.dev/" : "react-2.svg",
  "https://aws.amazon.com/" : "amazon-web-services-logo.svg",
  "https://cloud.google.com/" : "google-cloud-1.svg",
  "https://stripe.com/" : "logo-stripe.svg"
}
</script>

<template>
  <div class="bg-grey-50" id="tools">
    <div class="container py-16 md:py-20">
      <div class="mx-auto w-full sm:w-3/4 lg:w-full">
        <h2
            class="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-4xl"
        >
          My favourite frameworks & tools
        </h2>
        <div class="flex flex-wrap items-center justify-center pt-4 sm:pt-4">
          <a
              v-for="(icon, link) in tools"
              :key="link"
              :href="link"
              class="m-8 block"
              target="_blank"
          >
            <img
                :src="`/img/${icon}`"
                alt="framework logo"
                class="mx-auto block h-12 w-auto"
            />
          </a>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>