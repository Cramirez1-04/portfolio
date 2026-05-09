import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import Contact from '../views/Contact.vue'
import About from '../views/About.vue'
import ProjectDetail from '../views/ProjectDetail.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects }, // Fixed: Use imported component directly
  { path: '/project/:id', name: 'ProjectDetail', component: ProjectDetail }, // Fixed: Added quotes around name and comma
  { path: '/contact', component: Contact },
  { path: '/about', component: About } // Fixed: Added comma
]

const router = createRouter({
  history: createWebHistory('/portfolio/'),
  routes,
})

export default router