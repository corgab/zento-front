<template>
    <div>
        <h3><i class="bi bi-hourglass-top"></i> Today's top highlights</h3>
        <p class="text-body-secondary">Latest breaking news, pictures, videos and special reports</p>
        <div  class="row row-cols-2 g-4">
            <CardContent v-if="posts.length > 1" v-for="post in posts" :key="post.id" :post="post" />
            <h2 v-else>Nessun Post...</h2>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import CardContent from '../CardContent.vue'
import {store} from '../../store'
export default {
    components: {
        CardContent,
        
    },
    data() {
        return {
            posts: [], // Array per conservare i post
            //   loading: true, // Flag per il caricamento
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
            })
        }
    },
    mounted() {
        this.fecthPosts()
    }
}
</script>

<style lang="scss" scoped></style>