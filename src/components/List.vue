<template>
  <div>
      <ul v-if="listNotes && listNotes.length > 0">
        <li v-for="list in listNotes" :key="list.id">
          <div>{{ list.note }}</div>
          <div>{{ list.isCompleted }}</div>
        </li>
      </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'List',
    computed: {
      ...mapGetters({
        listNotes: 'getListNotes'
      })
    },
    async mounted() {
      this.fetchNotes(); // action
    },
    methods: {
      ...mapActions(['fetchNotes'])
    }
}
</script>

<style scoped>
ul {
  padding: 0;
  list-style: none;
  margin: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
}
</style>