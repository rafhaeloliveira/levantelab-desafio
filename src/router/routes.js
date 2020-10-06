
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'Dashboard', component: () => import('pages/Dashboard/Dashboard.vue') },
      { path: '/profile', name: 'Profile', component: () => import('pages/Profile.vue') },
      { path: '/video-gallery', name: 'Video Gallery', component: () => import('pages/VideoGallery/VideoGallery.vue') },
      { path: '/video-details', name: 'Video Details', component: () => import('pages/VideoDetail.vue') },
      { path: '/following', name: 'Following', component: () => import('pages/Following.vue') }
    ]
  },
  {
    path: '/auth',
    component: () => import('layouts/Auth.vue'),
    children: [
      { path: '', component: () => import('pages/Welcome.vue') },
      { path: 'login', component: () => import('pages/Login.vue') },
      { path: 'signup', component: () => import('pages/Signup.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
