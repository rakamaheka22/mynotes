import { auth } from '../../../firebase';

import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile
} from 'firebase/auth';

// state
const state = () => ({
    statusLogin: false,
});

// getters
const getters = {
    getStatusLogin(state) {
        return state.statusLogin;
    }
};

// mutations
const mutations = {
    SET_IS_LOGIN(state, data) {
        state.statusLogin = data;
    }
};

// actions
const actions = {
    async setRegister({}, payload) {
        const { email, password, name } = payload;
        try {
            if (email && password) {
                const response = await createUserWithEmailAndPassword(auth, email, password);

                await updateProfile(response.user, { displayName: name });
                return true;
            }
        } catch (error) {
            return error;
        }
    },
    async doLogin({}, payload) {
        const { email, password } = payload;
        try {
            if (email && password) {
                await signInWithEmailAndPassword(auth, email, password);
                return true;
            }
        } catch (error) {
            return error
        }
    },
    isLoggedIn({ commit }) {
        return new Promise((resolve, reject) => {
            onAuthStateChanged(auth, user => {
                if (user) {
                    commit('SET_IS_LOGIN', true);
                    resolve(true);
                } else {
                    commit('SET_IS_LOGIN', false);
                    resolve(false);
                }
            }, err => {
                reject(err);
            });
        })
    },
    async doLogout({}) {
        try {
            await signOut(auth);
            return true;
        } catch (error) {
            return error;
        }
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};