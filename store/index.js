export const state = () => ({
    token: null
})

export const mutations = {
    setToken(state, token) {
        state.token = token;
    },
    clearToken(state) {
        state.token = null;
    }
}

export const actions = {
    nuxtServerInit({dispatch}) {
        console.log('nuxtServerInit');
    },
    login({commit}) {
        commit('setToken', 'token')
    },
    logout({commint}) {
        commit('clearToken')
    }
}

export const getters = {
    hasToken: s => !!s.token
}