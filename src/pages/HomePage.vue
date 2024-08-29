<template>
    <div>
        <h1>ciao</h1>
        <CardContent v-for="post in posts" :key="post.id" :post="post"/>
    </div>
</template>

<script>
import CardContent from "../components/CardContent.vue";
import axios from 'axios'; // Importa axios

export default {
    components: {
        CardContent
    },
    data() {
        return {
            posts: [], // Array per conservare i post
            //   loading: true, // Flag per il caricamento
        }
    },
    methods: {
        fecthPosts() {
            axios.get('http://127.0.0.1:8000/api/posts/', {
                params: {
                    per_page: 6
                }
            }
            ).then(response => {
                this.posts = response.data.data;
                console.log(response.data.data)
                console.log(this.posts)
            })
        }
    },
    mounted() {
        this.fecthPosts()
    }
}
</script>

<style lang="scss" scoped></style>