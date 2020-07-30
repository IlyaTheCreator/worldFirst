import Vue from "vue"
import VueRouter from 'vue-router'

import Home from '../components/Home'
import Login from '../components/admin/Login'
import Admin from '../components/admin/Admin'
import AdminHome from "../components/admin/adminHome/AdminHome";
import Templates from '../components/admin/templates/Templates'
import AllTemplates from '../components/admin/templates/AllTemplates'
import NewTemplate from '../components/admin/templates/NewTemplate'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/admin-login',
            component: Login,
        },
        {
            path: '/admin',
            component: Admin,
            children: [
                {
                    path: '/',
                    component: AdminHome
                },
                {
                    path: '/admin/templates',
                    component: Templates,
                    children: [
                        {
                            path: '/',
                            component: AllTemplates,
                        },
                        {
                            path: '/templates/new-template',
                            component: NewTemplate
                        }
                    ]
                }
            ]
        },
        {
            path: '/admin/templates',
            component: Templates
        }
    ]
})
