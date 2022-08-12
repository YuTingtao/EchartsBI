import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {

        };
    },
    getters: {},
    mutations: {

    },
    actions: {

    },
    modules: {

    }
});

// 防止vuex刷新失效
window.addEventListener('beforeunload', () => {
    sessionStorage.vuex = JSON.stringify(store.state);
});
if (/iphone|ipad|ipod/.test(navigator.userAgent)) {
    window.addEventListener('pagehide', () => {
        sessionStorage.vuex = JSON.stringify(store.state);
    });
}
if (sessionStorage.vuex) {
    store.replaceState(
        Object.assign({}, store.state, JSON.parse(sessionStorage.vuex))
    );
}

export default store;
