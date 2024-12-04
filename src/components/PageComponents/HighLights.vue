<template>
    <div v-bind="$attrs">
        <h3><i class="bi bi-hourglass-top"></i> I principali eventi di oggi</h3>
        <p class="text-body-secondary fs-5">Ultime notizie, immagini, video e reportages speciali</p>
        <!-- Messaggio di caricamento -->
        <div v-if="loading" class="text-center">
            <p>Loading posts...</p>
        </div>
        <div class="row row-cols-1 row-cols-md-2 g-4" v-else>
            <CardContent v-if="posts.length > 0" v-for="post in posts" :key="post.id" :post="post" class="col" />
            <h2 v-else>Nessun Post...</h2>
        </div>
        <div class="text-center" :class="lastPage > currentPage ? 'd-block' : 'd-none'">
            <button @click="loadMorePosts()" class="btn btn-primary">load more <i
                    class="bi bi-arrow-down-circle ms-2 align-middle"></i></button>

        </div>
    </div>

</template>

<script>
import axios from 'axios';
import CardContent from '../CardContent.vue'
import { store } from '../../store'
export default {
    components: {
        CardContent,

    },
    data() {
        return {
            posts: [], // Array per i post
            currentPage: 1,
            lastPage: 0,
            loading: true, // Flag per il caricamento
            store
        }
    },
    methods: {
        fetchPosts() {
            // this.loading = true
            axios.get(`${store.appUrl}api/posts`, {
                params: {
                    per_page: 6,
                    page: this.currentPage
                }
            }
            ).then(response => {
                this.posts = [...this.posts, ...response.data.data];
                this.lastPage = response.data.last_page;
                console.log('ultima pagina', this.lastPage)
                console.log(response.data.data)
                console.log(this.posts)
            }).finally(() => {
                this.loading = false;
            });
        },
        loadMorePosts() {
            // se ultima pagina è maggiore  di pagina attuale
            if (this.lastPage > this.currentPage) {
                return this.currentPage++
            }
        }
    },
    mounted() {
        this.fetchPosts()
    },
    watch: {
        currentPage() {
            this.fetchPosts(); // Caria i nuovi contenuti quando cambia
        }
    }
}
</script>

<style lang="scss" scoped></style>