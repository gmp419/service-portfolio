<script setup>
import SocialLinks from "./SocialLinks.vue";
import axios from "axios";
import Swal from "sweetalert2";

const currentYear = new Date().getFullYear()

const formData = {
  email: '',
};
const submit = async () => {
  try {
    const response = await axios.post('https://formspree.io/f/mnqkgrdz', formData);
    if (response.status === 200) {
      await Swal.fire('Get Ready', 'I\'ll be in touch soon.', 'success');
    }
  } catch (error) {
    await Swal.fire('Oops!', 'Something is wrong.', 'error');
    console.error('Error submitting the form', error);
  }
};
</script>

<template>

  <div
      class="relative bg-primary bg-cover bg-center bg-no-repeat py-16 bg-blend-multiply lg:py-24"
  >
    <div class="container relative z-30">
      <h3
          class="text-center font-header text-3xl uppercase leading-tight tracking-wide text-white sm:text-4xl lg:text-5xl"
      >
        Keep <span class="font-bold">up-to-date</span> <br />
        with what I'm up to
      </h3>
      <form class="mt-6 flex flex-col justify-center sm:flex-row" name="joinClub" method="POST" @submit.prevent="submit">
        <input
            class="w-full rounded px-4 py-3 font-body text-black sm:w-2/5 sm:py-4 lg:w-1/3"
            type="text"
            id="email"
            v-model="formData.email"
            placeholder="Give me your Email"
        />
        <button
            type="submit"
            class="mt-2 rounded bg-yellow px-8 py-3 font-body text-base font-bold uppercase text-primary transition-colors hover:bg-primary hover:text-white focus:border-transparent focus:outline-none focus:ring focus:ring-yellow sm:ml-2 sm:mt-0 sm:py-4 md:text-lg"
        >
          Join the club
        </button>
      </form>
    </div>
  </div>
  <div class="bg-primary" >
    <div class="container flex flex-col justify-between py-6 sm:flex-row">
      <p class="text-center font-body text-white md:text-left">
        © Copyright {{ currentYear }}. All right reserved, GOLDIE.
      </p>
      <div class="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
        <SocialLinks/>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>