import Home from './components/Home.vue';
import SignUp from "./components/signUp.vue";
import { createRouter, createWebHistory } from "vue-router";
import Login from './components/Login.vue';
import Add from './components/add.vue';
import Update from './components/update.vue';

const routes = [
    {
        name:'Home',
        component:Home,
        path:'/'
    },
    {
        name:'signUp',
        component:SignUp,
        path:'/sign-up'
    },
    {
        name:'Login',
        component:Login,
        path:'/login'
    },
    {
        name:'Add',
        component:Add,
        path:'/add'
    },
    {
        name:'Update',
        component:Update,
        path:'/update/:id'
    }

];


const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;