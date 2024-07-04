import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'landing',
            component: LandingView
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue')
        }
    ]
    // scrollBehavior(to, from, savedPosition) {
    //     let scrollToObj = {
    //         behavior: 'smooth',
    //         top: 0
    //     }
    //     if (to.hash) {
    //         switch (to.hash) {
    //             case '#our-projects':
    //                 // scrollToObj.el = '#our-projects'
    //                 scrollToObj.top = '100vh'
    //                 break
    //             case '#our-works':
    //                 scrollToObj.el = '#our-works'
    //                 break
    //             case '#our-clients':
    //                 scrollToObj.el = '#our-clients'
    //                 break
    //             case '#our-story':
    //                 scrollToObj.el = '#our-story'
    //                 break
    //             default:
    //                 break
    //         }
    //     }
    //     return scrollToObj
    // }
})

export default router
