<template>
  <div>
      <input v-model="note" type="text" @input="onInput">
      <button @click="addNote">Add</button>
  </div>
</template>

<script>
export default {
    name: 'AddNote',
    data() {
      return {
        note: ''
      }
    },
    methods: {
      onInput(event) {
        console.log(event.target.value);
        console.log(this.capitalizeWords(event.target.value));
      },
      async addNote() {
        const payload = {
          id: this.$store.getters.getCountNotes + 1,
          note: this.capitalizeWords(this.note),
          isCompleted: false
        }
        const res = await this.$store.dispatch('addNote', payload);
        if (res) {
          this.$moshaToast('Berhasil Menambahkan Note', {
            position: 'bottom-center',
            type: 'info'
          });
          this.note = '';
          setTimeout(() => {
            location.reload();
          }, 2000);
        }
      }
    }
}
</script>

<style>

</style>