<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ descTitle }}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'Header',
    // props: {
    //     title: {
    //         type: String,
    //         required: true // harus ada stringnya
    //     }, // harus seperti ini 'My Notes' tidak boleh bernilai true/false atau 0-10
    //     descTitle: String, // harus angka tidak boleh bernilai alpabet atau true/false
    //     isTitle: Boolean // harus true/false tidak boleh alpabet atau angka
    // }, // data dari parent
    inject: ['titleFromParent'],
    computed: {
        title() {
            return `${this.$store.state.title} ${this.$store.state.name}`;
            // return this.$store.getters.getTitle;
        }
    },
    mounted() {
        this.helloWorld();
    },
    methods: {
        helloWorld() {
            this.$emit('hello', 'Hello World'); // data dari child
        }
    }
}
</script>

<style scoped>
</style>