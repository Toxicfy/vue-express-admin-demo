import Vue from 'vue';
import Router from 'vue-router';
import CreateArticle from './views/CreateArticle.vue';
import ListArticle from './views/ListArticle.vue';
import EditArticle from './views/EditArticle.vue';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        redirect: '/articles/index'
    }, {
        path: '/articles/index',
        name: 'list-article',
        component: ListArticle
    }, {
        path: '/articles/create',
        name: 'create-article',
        component: CreateArticle
    }, {
        path: '/article/:id/edit/',
        name: 'edit-article',
        component: EditArticle
    }]
});
