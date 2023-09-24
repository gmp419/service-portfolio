<script setup>
import {inject, ref} from 'vue';
const mobileMenu = ref(false);
const smoothScroll = inject('smoothScroll');

const triggerNavItem = (id) => {
  if (smoothScroll) {
    const elementToScroll = document.querySelector(id);
    if (elementToScroll) {
      smoothScroll({
        scrollTo: elementToScroll,
        // Additional options if needed
      });
    }
  }
};

const triggerMobileNavItem = (id) => {
  mobileMenu.value = false;
  triggerNavItem(id);
};
</script>

<template>
<div class="w-full z-50 top-0 py-3 sm:py-5 absolute">
  <div class="container flex items-center justify-between">
    <div>
      <a href="/">
        <img
            src="../assets/img/gmp-logo.png"
            class="w-24 lg:w-48"
            alt="logo image"
        />
      </a>
    </div>
    <div class="hidden lg:block">
      <ul class="flex items-center">
        <li class="group pl-6">
            <span
                @click="triggerNavItem('#about')"
                class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
            >About</span>

          <span
              class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
          ></span>
        </li>

        <li class="group pl-6">
            <span
                @click="triggerNavItem('#services')"
                class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
            >Services</span>

          <span
              class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
          ></span>
        </li>

        <li class="group pl-6">
            <span
                @click="triggerNavItem('#portfolio')"
                class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
            >Portfolio</span>

          <span
              class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
          ></span>
        </li>

        <li class="group pl-6">
            <span
                @click="triggerNavItem('#tools')"
                class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
            >Tools</span>

          <span
              class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
          ></span>
        </li>

        <li class="group pl-6">
            <span
                @click="triggerNavItem('#work')"
                class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
            >Work</span>

          <span
              class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
          ></span>
        </li>

        <li class="group pl-6">
            <span
                @click="triggerNavItem('#contact')"
                class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
            >Contact</span>

          <span
              class="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
          ></span>
        </li>
      </ul>
    </div>
    <div class="block lg:hidden">
      <button @click="mobileMenu = true">
        <i class="bx bx-menu text-4xl text-white"></i>
      </button>
    </div>
  </div>

  <div
      class="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden"
      :class="{ 'opacity-100 pointer-events-auto': mobileMenu }"
  >
    <div
        class="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3"
    >
      <button
          class="absolute top-0 right-0 mt-4 mr-4"
          @click="mobileMenu = false"
      >
        <img src="/src/assets/img/icon-close.svg" class="h-10 w-auto" alt="close logo" />
      </button>

      <ul class="mt-8 flex flex-col">
        <li class="py-2">
            <span
                @click="triggerMobileNavItem('#about')"
                class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
            >About</span>
        </li>

        <li class="py-2">
            <span
                @click="triggerMobileNavItem('#services')"
                class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
            >Services</span
            >
        </li>

        <li class="py-2">
            <span
                @click="triggerMobileNavItem('#portfolio')"
                class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
            >Portfolio</span
            >
        </li>

        <li class="py-2">
            <span
                @click="triggerMobileNavItem('#tools')"
                class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
            >Tools</span>
        </li>

        <li class="py-2">
            <span
                @click="triggerMobileNavItem('#work')"
                class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
            >Work</span
            >
        </li>

        <li class="py-2">
            <span
                @click="triggerMobileNavItem('#contact')"
                class="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
            >Contact</span
            >
        </li>
      </ul>
    </div>
  </div>
</div>
</template>
