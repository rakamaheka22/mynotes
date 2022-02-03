import axios from 'axios';

// state
const state = () => ({
    listNotes: []
});

// getters
const getters = {
    getListNotes(state) {
        return state.listNotes;
    },
    getCountNotes(state) {
        return state.listNotes.length;
    }
};

// mutations
const mutations = {
    SET_LIST_NOTES(state, data) {
        state.listNotes = data;
    }
};

// actions
const actions = {
    async fetchNotes({ commit }) {
        const res = await axios.get('/Sheet1');
        const { data } = res;
        commit('SET_LIST_NOTES', data);
    },
    async addNote({}, payload) {
        const { id, note, isCompleted } = payload;
        const res = await axios.post('/Sheet1', [{
            id,
            note,
            isCompleted,
        }]);
        if (res) {
            return true;
        }
        return false;
    },
    async updateNote({ commit, dipatch, getters, state }, payload) {
        // update
    },
    async deleteNote({}, payload) {
        // delete
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}