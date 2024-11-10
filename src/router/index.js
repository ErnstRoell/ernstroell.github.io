import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JobsView from '../views/jobs/JobsView.vue'
import JobDetails from '../views/jobs/JobDetails.vue'
import ProjectsView from '../views/projects/ProjectsView.vue'
import ProjectDetails from '../views/projects/ProjectDetails.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: JobsView
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView
  },
  {
    path: '/projects/:id',
    name: 'ProjectDetails',
    component: ProjectDetails
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
