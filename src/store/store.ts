import {createStore} from 'vuex'

// modules
// import counterModule from "@/store/counter";

export default createStore({
    state: {
        counter: 0,
        isAuthenticated: false
    },
    mutations: {
        increment: state => {
            state.counter++;
        },
        increase: (state, payload) => {
            state.counter += payload.amount;
        },
        setAuth: (state, payload) => {
            state.isAuthenticated = payload.auth
        }
    },
    getters: {
        counter: state => {
            return state.counter
        },
        isAuthenticated: state => {
            return state.isAuthenticated
        },
    },
    actions: {
        increment: context => {
            context.commit('increment');
        },
        increase: (context, payload) => {
            context.commit('increase', payload);
        },
        login: (context, payload) => {
            context.commit('setAuth', payload);
        },
        logout: (context, payload) => {
            context.commit('setAuth', payload);
        },
    },
    modules: {
    }
})
