<template>
  <div class="min-h-screen bg-gray-50 mt-10 px-6 py-20">
    <div class="max-w-4xl mx-auto">

      <!-- Title -->
      <h1 class="secondary-font text-4xl font-bold text-center text-[#fbB335]">Contact Me</h1>
      <p class="text-center text-gray-600 mt-2">
        Feel free to reach out for opportunities!
      </p>
      <!-- Form -->
      <form class="font-primary mt-10 bg-white shadow-lg rounded-lg p-8 space-y-6">
        <!-- Name -->
        <div>
          <label class="block text-gray-700 mb-2">Name</label>
          <input 
            type="text" 
            placeholder="Your name"
            class="w-full border-2 border-gray-300 rounded px-4 py-2 "
          />
        </div>

        <!-- Email -->
        <div>
          <label class="block text-gray-700 mb-2">Email</label>
          <input 
            type="email" 
            placeholder="you@example.com"
            class="w-full border-2 border-gray-300 rounded px-4 py-2 "
          />
        </div>

        <!-- Message -->
        <div>
          <label class="block text-gray-700 mb-2">Message</label>
          <textarea 
            rows="5"
            placeholder="Your message..."
            class="w-full border-2 border-gray-300 rounded px-4 py-2 "
          ></textarea>
        </div>

        <!-- Button -->
        <div class="font-primary text-center">
          <button 
            type="submit"
            class="bg-primary px-6 py-3 rounded-full border-2 border-orange-300 hover:bg-[#fbB335] hover:border-none hover:text-white transition"
          >
           Send Message
          </button>
        </div>
      </form>
     
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
}
</script>