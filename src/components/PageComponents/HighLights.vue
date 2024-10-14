<template>
    <div>
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
            posts: [], // Array per conservare i post
            loading: true, // Flag per il caricamento
            store
        }
    },
    methods: {
        fecthPosts() {
            axios.get(`${store.appUrl}api/posts`, {
                params: {
                    per_page: 6
                }
            }
            ).then(response => {
                this.posts = response.data.data;
                console.log(response.data.data)
                console.log(this.posts)
                // console.log(response)
            }).finally(() => {
                this.loading = false;
            });
        }
    },
    mounted() {
        this.fecthPosts()
    }
}
</script>

<style lang="scss" scoped></style>