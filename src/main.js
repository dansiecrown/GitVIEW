import { createApp } from 'vue'
import { createStore } from "vuex";
import App from './App.vue'
import router from './router'

import './assets/main.css'



const store = new createStore({
    state: {
        repos: [], // array of objects
        repo: {}, // object
        loading: true,
        error: null,
        user: '',
        page: 1,
        
    },

    mutations: {
        SET_REPOS(state, repos) {
            state.repos = repos;
        },
        SET_REPO(state, repo) {
            state.repo = repo;
        },
        SET_USER(state, user) {
            state.user = user;
        },
        SET_PAGE(state, page) {
            state.page = page;
        }
    },

    getters: {
        repos: state => state.repos,
        repo: state => state.repo,
        isLoading: state => state.loading,
        user: state =>  state.user,
        page: state => state.page,
    }
});


const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')

