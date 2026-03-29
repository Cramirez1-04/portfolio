<template>
  <section class="secondary-font min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 bg-linear-to-r from-orange-50 to-orange-100">
    <h1 class="text-5xl font-bold text-primary">Hi, I'm <span class="text-[#fbB335]">Carissa Ramirez</span></h1>
    <p class="mt-4 text-gray-700 text-center max-w-xl">Welcome to my portfolio! I build modern, clean, and responsive websites.</p>
    <div class="mt-6 flex space-x-4">
      <router-link to="/projects" class="px-6 py-3 bg-primary text-white rounded bg-[#fbB335] transition">See Projects</router-link>
      <router-link to="/contact" class="px-6 py-3 border-2 border-primary text-primary rounded hover:bg-[#fbB335] hover:text-white transition">Contact Me</router-link>
    </div>
  </section>
</template>

<script>
export default { name: "Home" }
</script>