<template>
  <nav class="font-primary fixed top-0 w-full bg-white shadow z-50">
    <div class="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-[#37D5D6] to-[#36096D]"></div>
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold  text-primary"><i class="fa-solid fa-leaf" style="color: rgb(116, 192, 252);"></i>My Portfolio</h1>
      <ul class="flex space-x-6">
        <li><router-link to="/" class="px-4 py-2 hover:rounded-full hover:bg-blue-300 hover:text-white ">Home</router-link></li>
        <li><router-link to="/projects" class="px-4 py-2 hover:rounded-full hover:bg-blue-300 hover:text-white">Projects</router-link></li>
        <li><router-link to="/contact" class="px-4 py-2 hover:rounded-full hover:bg-blue-300 hover:text-white">Contact</router-link></li>
        <li><router-link to="/about" class="px-4 py-2 hover:rounded-full hover:bg-blue-300 hover:text-white">About</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default { name: "Header" }
</script>