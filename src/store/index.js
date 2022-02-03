import { createStore } from "vuex";
import notes from './modules/notes';
import auth from './modules/auth';

const store = createStore({
    state: () => ({
        title: 'Belajar Vue 4',
        name: 'Raka'
    }),
    getters: {
        getTitle(state) {
            return `${state.title} ${state.name}`;
        }
    },
    mutations: {
        SET_TITLE: (state, data) => {
            if (data !== '') {
                state.title = data;
            }
        }
    },
    actions: {
        // actions
    },
    modules: {
        notes,
        auth
    }
});

export default store;