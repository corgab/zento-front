<template>
    <div>
        <h3 class="pb-2">Post Recenti</h3>
        <router-link v-for="post in recentPosts" :to="{ name: 'SinglePost', params: { post: post.slug } }"
            class="text-decoration-none card-overlay">
            <div class="d-flex align-items-center pb-3 column-gap-3">
                <img :src="post.images[0].link" :alt="post.images[0].alt" class="col-4 img-fluid img-thumbnail">
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
                    // console.log(response.data)
                    this.recentPosts = response.data.data
                    console.log(this.recentPosts)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    },
    mounted() {
        this.fetchRecentPosts()
    }
}
</script>

<style lang="scss" scoped></style>