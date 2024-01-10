<script setup>
const workExperience = [
  {
    logoSrc: '/img/timeless-logo.png',
    date: 'May 2021 - Current',
    title: 'Software Developer - Timeless',
    description:
    'Experienced software developer with a strong focus on developing high-quality applications using frameworks such as Laravel, React, and Vue.js. Skilled in application architecture and database infrastructure design, as well as UI and UX design. Proven ability to work collaboratively with stakeholders to identify requirements and deliver projects on time and within budget.',
  },
  {
    logoSrc: '/img/amazon-web-services-logo.svg',
    date: 'March 2022 - Mar 2025',
    title: 'AWS Certified Cloud Practitioner',
    description:
        'Earners of this certification have a fundamental understanding of IT services and their uses in the AWS Cloud. They demonstrated cloud fluency and foundational AWS knowledge. Badge owners are able to identify essential AWS services necessary to set up AWS-focused projects.',
  },
  {
    logoSrc: '/img/demo-logo.png',
    date: 'Oct 2020 - May 2021',
    title: 'Software Developer - Kofax',
    description:
    'Seasoned PHP developer skilled in building feature-rich web applications, leveraging the power of PHP\'s versatility and performance. Adept at collaborating with cross-functional teams to turn project requirements into elegant, efficient, and reliable software solutions, ensuring client satisfaction and project success.',
  },
];
</script>

<template>
  <div class="container py-16 md:py-20" id="work">
    <h2
        class="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
    >
      My work experience
    </h2>
    <h3
        class="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
    >
      Here's what I did before freelancing
    </h3>

    <div class="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
    <span
        class="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block"
    ></span>

      <div v-for="work in workExperience" class="mt-8 flex flex-col text-center md:flex-row md:text-left">
        <div class="md:w-2/5">
          <div class="flex justify-center md:justify-start">
          <span class="shrink-0">
            <img
                :src="work.logoSrc"
                class="h-auto w-32"
                alt="company logo"
            />
          </span>
            <div class="relative ml-3 hidden w-full md:block">
            <span
                class="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"
            ></span>
            </div>
          </div>
        </div>
        <div class="md:w-3/5">
          <div class="relative flex md:pl-18">
          <span
              class="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"
          ></span>

            <div class="mt-1 flex">
              <i class="bx bxs-right-arrow hidden text-primary md:block"></i>
              <div class="md:-mt-1 md:pl-8">
              <span class="block font-body font-bold text-grey-40">{{ work.date }}</span>
                <span
                    class="block pt-2 font-header text-xl font-bold uppercase text-primary"
                >{{ work.title }}</span>
                <div class="pt-2">
                <span class="block font-body text-black"
                >{{work.description }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>