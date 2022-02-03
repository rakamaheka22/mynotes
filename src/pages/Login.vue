<template>
  <div class="login">
      <form @submit.prevent="doLogin">
          <div class="input">
              <label for="email">Email</label>
              <input v-model="login.email" type="email" id="email">
          </div>
          <div class="input">
              <label for="password">Password</label>
              <input v-model="login.password" type="password" id="password">
          </div>
          <button role="submit">Log In</button>
      </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'Login',
    data() {
        return {
            login: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions({
            loginWithEmailAndPassword: 'doLogin'
        }),
        async doLogin() {
            // logic untuk memanggil api login yang ada di state management
            console.log(this.login);
            const response = await this.loginWithEmailAndPassword(this.login);
            if (response !== true) {
                this.$moshaToast('Gagal Login', {
                    position: 'bottom-center',
                    type: 'danger'
                });
            } else {
                this.$moshaToast('Berhasil Login', {
                    position: 'bottom-center',
                    type: 'success'
                });
                setTimeout(() => {
                    this.$router.push('/');
                }, 2000);
            }
        }
    }
}
</script>

<style>
.login {
    width: 100%;
    max-width: 90rem;
    margin: auto;
    padding: 16px;
}

label {
    margin-right: 16px;
}

.input {
    margin-bottom: 10px;
}
</style>