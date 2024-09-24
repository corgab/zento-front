<template>
    <div>
        <h1>{{ tag ? tag : 'Loading...' }}</h1>

        <div v-if="posts.length">
            <div v-for="post in posts" :key="post.slug" class="post">
                <h3>{{ post.title }}</h3>
            </div>
        </div>
        <div v-else>
            <p>No posts available for this tag.</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../store';

export default {
    data() {
        return {
            tag: null, // Dati del tag
            posts: [] // Post associati al tag
        };
    },
    mounted() {
        this.fetchPostsByTagSlug(); // Recupera i post associati al tag quando il componente viene montato
    },
    methods: {
        fetchPostsByTagSlug() {
            const slug = this.$route.params.tag; // Ottieni lo slug dalla rotta
            axios.get(`${store.appUrl}api/tags/${slug}`)
                .then(response => {
                    this.tag = response.data.name;
                    console.log(this.tag)
                    this.posts = response.data.posts; // Imposta i post
                })
                .catch(error => {
                    console.error(slug);
                });
        }
    }
}
</script>
