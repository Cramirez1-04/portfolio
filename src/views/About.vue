<template>
  <div class="min-h-screen px-6 py-20 bg-linear-to-r from-orange-50 to-orange-200">
    <div class="max-w-6xl mx-auto space-y-20">

      <!-- Intro -->
      <section class="text-center mt-10">
        <h1 class="secondary-font text-5xl font-bold text-primary mb-2">About Me</h1>
        <p class="mt-4 text-gray-700 max-w-3xl mx-auto text-lg font-primary">
          Hi, I’m Magui, a web developer passionate about building clean, responsive, and user-friendly applications. 
          I love turning ideas into real, interactive websites.
        </p>
      </section>

      <!-- My Journey (Timeline) -->
      <section>
        <h2 class="secondary-font text-3xl font-semibold text-primary mb-8 text-center">My Journey</h2>
        <div class="relative border-l-2 border-primary ml-6">
          <div class="mb-10 ml-6 relative">
            <span class="absolute -left-5 top-0 bg-primary rounded-full w-8 h-8 flex items-center justify-cente"><i class="bi bi-1-square"></i></span>
            <h3 class="secondary-font text-xl font-semibold text-gray-800">Started Learning Programming</h3>
            <p class="text-gray-600 mt-2 font-primary">
              I began learning programming through computer science courses, experimenting with small projects and exercises.
            </p>
          </div>
          <div class="mb-10 ml-6 relative">
            <span class="absolute -left-5 top-0 bg-primary rounded-full w-8 h-8 flex items-center justify-cente"><i class="bi bi-2-square"></i></span>
            <h3 class="secondary-font text-xl font-semibold text-gray-800">Web Development Focus</h3>
            <p class="text-gray-600 mt-2 font-primary">
              I discovered web development and focused on creating responsive, user-friendly websites using modern tools.
            </p>
          </div>
          <div class="mb-10 ml-6 relative">
            <span class="absolute -left-5 top-0 bg-primary rounded-full w-8 h-8 flex items-center justify-cente"><i class="bi bi-3-square"></i></span>
            <h3 class="secondary-font text-xl font-semibold text-gray-800">Building Projects</h3>
            <p class="text-gray-600 mt-2 font-primary">
              I built projects using Vue.js, Tailwind CSS, Bootstrap, and backend tools like PHP/Laravel and Firebase.
            </p>
          </div>
        </div>
      </section>

      <!-- Skills (Cards) -->
      <section>
        <h2 class="secondary-font text-3xl font-semibold text-primary mb-8 text-center">Skills</h2>
        <div class="secondary-font grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          <div class="bg-white shadow-lg rounded-lg p-4 text-center hover:scale-105 hover:bg-[#fbB335] transform transition">
            <p class="text-gray-800 font-semibold">HTML</p>
          </div>
          <div class="bg-white shadow-lg rounded-lg p-4 text-center hover:scale-105  hover:bg-[#fbB335] transform transition">
            <p class="text-gray-800 font-semibold">CSS</p>
          </div>
          <div class="bg-white shadow-lg rounded-lg p-4 text-center hover:scale-105  hover:bg-[#fbB335] transform transition">
            <p class="text-gray-800 font-semibold">JavaScript</p>
          </div>
          <div class="bg-white shadow-lg rounded-lg p-4 text-center hover:scale-105  hover:bg-[#fbB335] transform transition">
            <p class="text-gray-800 font-semibold">Vue.js</p>
          </div>
          <div class="bg-white shadow-lg rounded-lg p-4 text-center hover:scale-105  hover:bg-[#fbB335] transform transition">
            <p class="text-gray-800 font-semibold">Tailwind</p>
          </div>
          <div class="bg-white shadow-lg rounded-lg p-4 text-center hover:scale-105  hover:bg-[#fbB335] transform transition">
            <p class="text-gray-800 font-semibold">Bootstrap</p>
          </div>
          <div class="bg-white shadow-lg rounded-lg p-4 text-center hover:scale-105  hover:bg-[#fbB335] transform transition">
            <p class="text-gray-800 font-semibold">PHP</p>
          </div>
          <div class="bg-white shadow-lg rounded-lg p-4 text-center hover:scale-105  hover:bg-[#fbB335] transform transition">
            <p class="text-gray-800 font-semibold">Laravel</p>
          </div>
        </div>
      </section>

      <!-- Goals -->
      <section class="text-center">
        <h2 class="text-3xl font-semibold text-primary mb-4 secondary-font">Goals</h2>
        <div class="bg-white shadow-lg rounded-lg p-8 max-w-3xl mx-auto hover:shadow-xl transition">
          <p class="text-gray-700 text-lg font-primary">
            I am currently looking for internship opportunities in web development where I can gain real-world experience, collaborate with others, 
            and continue growing as a developer.
          </p>
        </div>
      </section>

    </div>
  </div>
</template>

<script>
export default {
  name: "About"
}
</script>