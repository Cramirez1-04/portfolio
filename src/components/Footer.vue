<template>
  <footer class="text-gray-700 px-6 py-12 mt-20">
    <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
      <!-- Column 1: Social -->
      <div>
        <h2 class="text-lg font-semibold text-[#fbB335] mb-3">Connect</h2>
        <div class="flex space-x-4">
          <a href="https://github.com/Cramirez1-04" class="hover:text-[#fbB335]"><i class="bi bi-github text-2xl"></i></a>
          <a href="https://www.linkedin.com/in/carissa-ramirez-0a6784275/" class="hover:text-[#fbB335]"><i class="bi bi-linkedin text-2xl"></i></a>
          <a href="mailto:carissar.0404@gmail.com" class="hover:text-[#fbB335]"><i class="bi bi-envelope text-2xl"></i></a>
        </div>
      </div>
      <!-- Column 2: Quick Links -->
      <div>
        <h2 class="text-lg font-semibold text-[#fbB335] mb-3">Quick Links</h2>
        <ul class="space-y-2">
          <li><router-link to="/" class="hover:text-[#fbB335]">Home</router-link></li>
          <li><router-link to="/projects" class="hover:text-[#fbB335]">Projects</router-link></li>
          <li><router-link to="/contact" class="hover:text-[#fbB335]">Contact</router-link></li>
          <li><router-link to="/about" class="hover:text-[#fbB335]">About</router-link></li>
        </ul>
      </div>

      <!-- Column 3: Contact -->
      <div>
        <h2 class="text-lg font-semibold text-[#fbB335] mb-3">Contact</h2>
        <p class="text-sm">Email: carissar.0404@gmail.com</p>
        <p class="text-sm mt-2">Location: Davenport, FL</p>
        
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="mt-10 border-t pt-4 text-center text-sm text-gray-500">
      © 2026 Carissa Ramirez • Copyright All rights reserved.
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>