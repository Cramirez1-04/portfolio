<template>
  <nav class="font-primary fixed top-0 w-full bg-white border-b-4 border-[#fbB335] shadow z-50">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold  text-primary"><i class="fa-solid fa-leaf" style="color: rgb(251, 179, 53);"></i>My Portfolio</h1>
      <ul class="flex space-x-6">
        <li><router-link to="/" class="px-4 py-2 hover:rounded-full hover:bg-[#fbB335] hover:text-white ">Home</router-link></li>
        <li><router-link to="/projects" class="px-4 py-2 hover:rounded-full hover:bg-[#fbB335] hover:text-white">Projects</router-link></li>
        <li><router-link to="/contact" class="px-4 py-2 hover:rounded-full hover:bg-[#fbB335] hover:text-white">Contact</router-link></li>
        <li><router-link to="/about" class="px-4 py-2 hover:rounded-full hover:bg-[#fbB335] hover:text-white">About</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default { name: "Header" }
</script>