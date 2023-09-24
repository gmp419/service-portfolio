<script setup>
import {inject, ref} from 'vue';
import Navbar from "./components/Navbar.vue";
import Hero from "./Pages/Hero.vue";
import About from "./Pages/About.vue";
import Services from "./Pages/Services.vue";
import Portfolio from "./Pages/Portfolio.vue";
import Clients from "./Pages/Clients.vue";
import Work from "./Pages/Work.vue";
import Statistics from "./Pages/Statistics.vue";
import Blog from "./Pages/Blog.vue";
import Contact from "./Pages/Contact.vue";
import Footer from "./components/Footer.vue";
import Tools from "./Pages/Tools.vue";
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

  <div id="main" class="relative">
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Portfolio/>
      <Tools/>
<!--      <Clients/>-->
      <Work/>
<!--      <Statistics/>-->
<!--      <Blog/>-->
      <Contact/>
      <Footer/>
  </div>
</template>
