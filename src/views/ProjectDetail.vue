<template>
  <div class="min-h-screen bg-gray-50 pt-20 pb-16">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
      
      <!-- Back Button -->
      <div class="mb-8">
        <router-link to="/projects" class="inline-flex items-center gap-2 text-gray-600 hover:text-[#37D5D6] transition">
          <i class="bi bi-arrow-left"></i>
          Back to Projects
        </router-link>
      </div>

      <!-- Project Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-primary mb-4">{{ project.title }}</h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">{{ project.description }}</p>
        
        <!-- Tech Stack -->
        <div class="flex flex-wrap justify-center gap-2 mt-6">
          <span v-for="tech in project.techStack" :key="tech" 
                class="px-3 py-1 bg-linear-to-r from-[#37D5D6] to-[#a567f0] text-white text-sm rounded-full">
            {{ tech }}
          </span>
        </div>
      </div>

      <!-- Image Gallery Section -->
      <div class="mb-16">
        <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Project Screenshots</h2>
        
        <!-- Featured Image Carousel -->
        <div class="relative bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div class="relative">
            <img 
              :src="project.images[currentImageIndex]" 
              :alt="`${project.title} screenshot ${currentImageIndex + 1}`"
              class="w-full h-auto object-contain bg-gray-100"
              style="max-height: 500px;"
            />
            
            <!-- Navigation Arrows -->
            <button 
              v-if="project.images.length > 1"
              @click="prevImage"
              class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition"
            >
              <i class="bi bi-chevron-left text-2xl"></i>
            </button>
            <button 
              v-if="project.images.length > 1"
              @click="nextImage"
              class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition"
            >
              <i class="bi bi-chevron-right text-2xl"></i>
            </button>
          </div>
          
          <!-- Image Counter -->
          <div class="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
            {{ currentImageIndex + 1 }} / {{ project.images.length }}
          </div>
        </div>

        <!-- Thumbnail Gallery -->
        <div v-if="project.images.length > 1" class="grid grid-cols-4 md:grid-cols-6 gap-3">
          <button 
            v-for="(image, index) in project.images" 
            :key="index"
            @click="currentImageIndex = index"
            class="relative rounded-lg overflow-hidden transition-all duration-200 hover:scale-105"
            :class="{ 'ring-2 ring-[#37D5D6] shadow-lg': currentImageIndex === index }"
          >
            <img 
              :src="image" 
              :alt="`Thumbnail ${index + 1}`"
              class="w-full h-20 object-cover"
            />
          </button>
        </div>
      </div>

      <!-- Project Details Section -->
      <div class="grid md:grid-cols-2 gap-8 mb-12">
        <!-- Features -->
        <div class="bg-white rounded-2xl shadow-lg p-6">
          <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <i class="bi bi-star-fill text-[#37D5D6]"></i>
            Key Features
          </h3>
          <ul class="space-y-2">
            <li v-for="feature in project.features" :key="feature" class="flex items-start gap-2">
              <i class="bi bi-check-circle-fill text-green-500 mt-1"></i>
              <span class="text-gray-700">{{ feature }}</span>
            </li>
          </ul>
        </div>

        <!-- Tech Details -->
        <div class="bg-white rounded-2xl shadow-lg p-6">
          <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <i class="bi bi-code-square text-[#37D5D6]"></i>
            Technical Details
          </h3>
          <ul class="space-y-2">
            <li v-for="detail in project.techDetails" :key="detail" class="flex items-start gap-2">
              <i class="bi bi-caret-right-fill text-[#37D5D6] mt-1"></i>
              <span class="text-gray-700">{{ detail }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex flex-wrap justify-center gap-4">
        <a 
          :href="project.githubLink" 
          target="_blank"
          class="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition shadow-lg"
        >
          <i class="bi bi-github"></i>
          View GitHub Repository
        </a>
        <a 
          v-if="project.liveLink"
          :href="project.liveLink" 
          target="_blank"
          class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#37D5D6] to-[#36096D] text-white rounded-full hover:opacity-90 transition shadow-lg"
        >
          <i class="bi bi-box-arrow-up-right"></i>
          View Live Demo
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectDetail",
  data() {
    return {
      currentImageIndex: 0,
      projects: {
        finiance: {
          title: 'FINIANCE',
          description: 'A comprehensive personal finance web application to help users track expenses, manage budgets, and achieve financial goals.',
          techStack: ['Django', 'Python', 'HTML', 'Bootstrap', 'JavaScript'],
          images: [
            '/images/finiance/1.png',
            '/images/finiance/2.png',
            '/images/finiance/3.png',
            '/images/finiance/4.png'
          ],
          features: [
            'Track income and expenses in real-time',
            'Interactive charts and spending analytics',
            'Budget planning and goal setting',
            'Recurring transaction automation',
            'Export reports to PDF/CSV'
          ],
          techDetails: [
            'Built with Django REST Framework for robust backend API',
            'SQLite database with efficient query optimization',
            'Responsive Bootstrap 5 frontend design',
            'JWT authentication for secure user sessions',
            'Chart.js integration for data visualization'
          ],
          githubLink: 'https://github.com/Cramirez1-04/Finiance',
          liveLink: ''
        },
        tayvat: {
          title: 'Tayvat Express',
          description: 'Single Page Application (SPA) website built with modern frontend technologies for an immersive user experience.',
          techStack: ['Vue', 'TailwindCSS', 'Firebase'],
          images: [
            '../images/tayvat/tayvat1.png',
            '../images/tayvat/tayvat2.png',
            '../images/tayvat/tayvat3.png'
          ],
          features: [
            'Fast and responsive SPA architecture',
            'Real-time data updates with Firebase',
            'User authentication and profiles',
            'Interactive UI with smooth animations',
            'Mobile-first responsive design'
          ],
          techDetails: [
            'Vue 3 Composition API for better code organization',
            'Firebase Firestore for real-time database',
            'Firebase Authentication for user management',
            'TailwindCSS for utility-first styling',
            'Vite for fast build times and HMR'
          ],
          githubLink: 'https://github.com/Cramirez1-04/Web2project-Vue',
          liveLink: 'https://project-5-f7119.web.app'
        },
        learnnova: {
          title: 'LearnNova',
          description: 'AI-powered study companion that helps students learn more effectively with personalized recommendations.',
          techStack: ['React', 'TypeScript', 'Vite', 'OpenAI API'],
          images: [
            '/images/learnnova/1.png',
            '/images/learnnova/2.png',
            '/images/learnnova/3.png'
          ],
          features: [
            'AI-powered study recommendations',
            'Interactive flashcards and quizzes',
            'Progress tracking and analytics',
            'Personalized study schedules',
            'Collaborative study groups'
          ],
          techDetails: [
            'React 18 with functional components and hooks',
            'TypeScript for type safety',
            'OpenAI GPT-3.5 API integration',
            'Vite for fast development experience',
            'Context API for state management'
          ],
          githubLink: '#',
          liveLink: ''
        },
        astral: {
          title: 'Astral-Realm',
          description: 'Character guide website for gaming enthusiasts featuring detailed character profiles and immersive lore.',
          techStack: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'TailwindCSS'],
          images: [
            '../images/astral/astral1.png',
            '../images/astral/astral2.png',
            '../images/astral/astral3.png',
            '../images/astral/astral4.png',
            '../images/astral/astral5.png'
          ],
          features: [
            'Detailed character profiles with stats and abilities',
            'Search and filter functionality',
            'User favorites and collections',
            'Interactive lore timeline',
            'Community rating system'
          ],
          techDetails: [
            'Laravel 10 with MVC architecture',
            'MySQL database with Eloquent ORM',
            'Blade templating engine',
            'TailwindCSS + Bootstrap hybrid styling',
            'RESTful API endpoints'
          ],
          githubLink: 'https://github.com/Cramirez1-04/Astral-Realms',
          liveLink: ''
        }
      }
    }
  },
  computed: {
    project() {
      const projectId = this.$route.params.id
      return this.projects[projectId] || this.projects.finiance
    }
  },
  methods: {
    nextImage() {
      if (this.currentImageIndex < this.project.images.length - 1) {
        this.currentImageIndex++
      }
    },
    prevImage() {
      if (this.currentImageIndex > 0) {
        this.currentImageIndex--
      }
    }
  },
  watch: {
    '$route.params.id'() {
      this.currentImageIndex = 0
    }
  }
}
</script>

<style scoped>
/* Smooth transitions */
.transition-all {
  transition: all 0.3s ease;
}

/* Custom scrollbar for the page */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #37D5D6, #36096D);
  border-radius: 5px;
}
</style>