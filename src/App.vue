<template>
  <div>
    <div class="menu">
      <router-link to="/" v-slot="{ isActive }">
        <button class="btn-link" :class="{ 'active-status': isActive }">
          Home
        </button>
      </router-link>
      <router-link to="/about" v-slot="{ isActive }">
        <button class="btn-link" :class="{ 'active-status': isActive }">
          About
        </button>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

* {
  box-sizing: border-box;
}

.menu {
  width: 100%;
  max-width: 90rem;
  margin: auto;
  background: #204f54;
}
.btn-link {
  color: white;
  padding: 10px;
  border: 0;
  background: #204f54;
}

.active-status {
  color: greenyellow;
}
</style>
