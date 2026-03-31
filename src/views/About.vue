<template>
  <div class="min-h-screen px-6 py-20 bg-linear-to-r from-orange-50 to-orange-100">
    <div class="max-w-6xl mx-auto space-y-20">

      <!-- Intro -->
      <section class="text-center mt-10">
        <h1 class="secondary-font text-5xl font-bold text-primary mb-2">About Me</h1>
        <p class="mt-4 text-gray-700 max-w-3xl mx-auto text-lg font-primary">
          Hi, I'm <span class="text-[#fbB335] font-semibold">Carissa Ramirez</span>, a Computer Science major at 
          <span class="text-[#fbB335] font-semibold">Florida Southern College</span> graduating in 2026. 
          I'm passionate about building clean, responsive, and user-friendly applications. 
          I love turning ideas into real, interactive websites.
        </p>
      </section>

      <!-- Education Section -->
      <section>
        <h2 class="secondary-font text-3xl font-semibold text-primary mb-8 text-center">Education</h2>
        <div class="bg-white shadow-lg rounded-4xl p-8 hover:shadow-xl transition text-center max-w-3xl mx-auto">
          <div class="flex justify-center mb-4">
            <svg class="w-16 h-16 text-[#fbB335]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-800 mb-2 secondary-font">Florida Southern College</h3>
          <p class="text-[#fbB335] font-semibold text-lg mb-1">Bachelor of Science in Computer Science</p>
          <p class="text-gray-600 mb-2">Minor in Mathematics</p>
          <p class="text-gray-500 mb-4">Expected Graduation: 2026</p>
          <div class="flex flex-wrap justify-center gap-3 mt-4">
            <span class="bg-orange-100 text-[#fbB335] px-3 py-1 rounded-full text-sm font-semibold">Computer Science</span>
            <span class="bg-orange-100 text-[#fbB335] px-3 py-1 rounded-full text-sm font-semibold">Mathematics</span>
            <span class="bg-orange-100 text-[#fbB335] px-3 py-1 rounded-full text-sm font-semibold">Web Development</span>
          </div>
        </div>
      </section>

      <!-- My Journey  -->
      <section>
        <h2 class="secondary-font text-3xl font-semibold text-primary mb-8 text-center">My Journey</h2>
        <div class="relative border-l-2 border-primary ml-6">
          <div class="mb-10 ml-6 relative">
            <span class="absolute -left-5 top-0 bg-primary rounded-full w-8 h-8 flex items-center justify-center text-white"><i class="bi bi-1-square"></i></span>
            <h3 class="secondary-font text-xl font-semibold text-gray-800">Started Learning Programming</h3>
            <p class="text-gray-600 mt-2 font-primary">
              I began learning programming through computer science courses at Florida Southern College, experimenting with small projects and exercises.
            </p>
          </div>
          <div class="mb-10 ml-6 relative">
            <span class="absolute -left-5 top-0 bg-primary rounded-full w-8 h-8 flex items-center justify-center text-white"><i class="bi bi-2-square"></i></span>
            <h3 class="secondary-font text-xl font-semibold text-gray-800">Web Development Focus</h3>
            <p class="text-gray-600 mt-2 font-primary">
              I discovered web development and focused on creating responsive, user-friendly websites using modern tools while pursuing my Computer Science degree.
            </p>
          </div>
          <div class="mb-10 ml-6 relative">
            <span class="absolute -left-5 top-0 bg-primary rounded-full w-8 h-8 flex items-center justify-center text-white"><i class="bi bi-3-square"></i></span>
            <h3 class="secondary-font text-xl font-semibold text-gray-800">Building Projects</h3>
            <p class="text-gray-600 mt-2 font-primary">
              I built projects using Vue.js, Tailwind CSS, Bootstrap, and backend tools like PHP/Laravel and Firebase, applying my math minor analytical skills to problem-solving.
            </p>
          </div>
        </div>
      </section>

      <!-- Skills (Cards) -->
      <section>
        <h2 class="secondary-font text-3xl font-semibold text-primary mb-8 text-center">Skills</h2>
        <div class="secondary-font grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          <div class="bg-white shadow-lg rounded-lg p-4 text-center hover:scale-105 hover:bg-[#fbB335] hover:text-white transform transition">
            <p class="font-semibold">HTML</p>
          </div>
          <div class="bg-white shadow-lg rounded-lg p-4 text-center hover:scale-105 hover:bg-[#fbB335] hover:text-white transform transition">
            <p class="font-semibold">CSS</p>
          </div>
          <div class="bg-white shadow-lg rounded-lg p-4 text-center hover:scale-105 hover:bg-[#fbB335] hover:text-white transform transition">
            <p class="font-semibold">JavaScript</p>
          </div>
          <div class="bg-white shadow-lg rounded-lg p-4 text-center hover:scale-105 hover:bg-[#fbB335] hover:text-white transform transition">
            <p class="font-semibold">Vue.js</p>
          </div>
          <div class="bg-white shadow-lg rounded-lg p-4 text-center hover:scale-105 hover:bg-[#fbB335] hover:text-white transform transition">
            <p class="font-semibold">Tailwind</p>
          </div>
          <div class="bg-white shadow-lg rounded-lg p-4 text-center hover:scale-105 hover:bg-[#fbB335] hover:text-white transform transition">
            <p class="font-semibold">MySQL</p>
          </div>
          <div class="bg-white shadow-lg rounded-lg p-4 text-center hover:scale-105 hover:bg-[#fbB335] hover:text-white transform transition">
            <p class="font-semibold">PHP</p>
          </div>
          <div class="bg-white shadow-lg rounded-lg p-4 text-center hover:scale-105 hover:bg-[#fbB335] hover:text-white transform transition">
            <p class="font-semibold">Laravel</p>
          </div>
        </div>
      </section>

      <!-- Goals -->
      <section class="text-center">
        <h2 class="text-3xl font-semibold text-primary mb-4 secondary-font">Goals</h2>
        <div class="bg-white shadow-lg rounded-lg p-8 max-w-3xl mx-auto hover:shadow-xl transition">
          <p class="text-gray-700 text-lg font-primary">
            As a Computer Science major at Florida Southern College, I am currently looking for internship opportunities in web development where I can gain real-world experience, collaborate with others, 
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