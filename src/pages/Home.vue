<template>
  <div>
       <DashboardLayout>
        <!-- Slot Header -->
        <template #header>
            <header-component
            :desc-title="description"
            @hello="ambilHelloWorld($event)"
            >
            <div>
                ini ui yang akan ditampilkan di dalam slot
            </div>
            </header-component>
        </template>
        <!-- Slot Main -->
        <template #main>
            <div class="tabs">
                <button @click="changeTab('list')">List Note</button>
                <button @click="changeTab('add')">Add Note</button>
            </div>

            <keep-alive>
            <component :is="tab" />
            </keep-alive>

        </template>
        <!-- Slot Footer -->
        <template #footer>
            Copyright &copy; 2022
        </template>
            
        </DashboardLayout>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
// Local Component
import DashboardLayout from '../layouts/Dashboard.vue'
import List from '../components/List.vue';
import AddNote from '../components/AddNote.vue';

import { ref } from 'vue';

export default {
    name: 'Home',
    components: {
        DashboardLayout,
        'list': List,
        'add': AddNote
    },
    data() {
        return {
            title: 'Raka Notes',
            description: 'Catatan Harianku',
            tab: 'list',
            count: 0,
        }
    },
    computed: {
        ...mapState({
            name: 'name',
            titleState: 'title'
        })
    },
    provide() {
        return {
            titleFromParent: ref(this.title)
        }
    },
    async mounted() {
        await this.isLoggedIn();
        await this.SET_TITLE('Catatan'); // mutation
        console.log(this.name, this.titleState);
        console.log(this.$store.state.name, this.$store.state.title);
        console.log('Status Login = ', this.$store.getters.getStatusLogin);

        setTimeout(async () => {
            await this.doLogout();
            console.log('Status Login = ', this.$store.getters.getStatusLogin);
        }, 5000);
    },
    methods: {
        ...mapMutations(['SET_TITLE']),
        ...mapActions(['isLoggedIn', 'doLogout']),
        ambilHelloWorld(value) {
        console.log(value);
        },
        changeTab(tabname) {
        this.tab = tabname;
        }
    }
}
</script>

<style>
.tabs {
    margin-bottom: 16px;
}
</style>