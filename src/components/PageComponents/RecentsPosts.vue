<template>
    <div>
        <h3 class="pb-2">Post Recenti</h3>
        <router-link v-for="post in recentPosts" :key="post.slug"
            :to="{ name: 'SinglePost', params: { post: post.slug } }" class="text-decoration-none card-overlay">
            <div class="d-flex align-items-center pb-3 column-gap-3">
                <div class="img-container col-4">
                    <img v-if="getFeaturedImage(post)" :src="getFeaturedImage(post).link"
                        :alt="getFeaturedImage(post).alt || 'Immagine in primo piano'"
                        class="img-fluid img-thumbnail" />
                </div>
                <div class="d-flex flex-column col-8">
                    <h5 class="fs-5 pb-1 title text-body">{{ post.title }}</h5>
                    <h5 class="fs-6 text-body-secondary">{{ post.created_date }}</h5>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../../store';
export default {
    data() {
        return {
            store,
            recentPosts: [],
        }
    },
    methods: {
        fetchRecentPosts() {
            axios.get(`${store.appUrl}api/recentposts`)
                .then(response => {
                    this.recentPosts = response.data.data
                    console.log(this.recentPosts)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        getFeaturedImage(post) {
            // Trova e restituisci l'immagine in primo piano per il post
            return post.images.find(img => img.is_featured === 1);
        }
    },
    mounted() {
        this.fetchRecentPosts()
    }
}
</script>

<style lang="scss" scoped>
.img-container {
    aspect-ratio: 3 / 2;
}

.img-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
