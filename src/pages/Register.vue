<template>
  <div class="register">
      <form @submit.prevent="doRegister">
          <div class="input">
              <label for="email">Email</label>
              <input v-model="register.email" type="email" id="email">
          </div>
          <div class="input">
              <label for="password">Password</label>
              <input v-model="register.password" type="password" id="password">
          </div>
          <div class="input">
              <label for="name">Name</label>
              <input v-model="register.name" type="text" id="name">
          </div>
          <button role="submit">Register</button>
      </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'Register',
    data() {
        return {
            register: {
                email: '',
                password: '',
                name: ''
            }
        }
    },
    methods: {
        ...mapActions(['setRegister']),
        async doRegister() {
            // logic untuk memanggil api register yang ada di state management
            console.log(this.register);
            const response = await this.setRegister(this.register);
            console.log(response);
        }
    }
}
</script>

<style>
.register {
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