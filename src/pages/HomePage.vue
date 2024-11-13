<template>
    <div v-if="isLoading" class="loading-overlay">
        <div class="spinner"></div>
    </div>
    <div>
        <div class="mt-3">
            <div class="container">
                <div v-if="!isLoading && posts.length == 4">
                    <div class="row">
                        <HeroCard class="col-12 col-xl-6 mb-md-3 mb-xl-0" :imageUrl="posts[0]?.images[0]?.link"
                            :title="posts[0]?.title" :user="posts[0]?.user.name" :created_at="posts[0]?.created_date"
                            :read_time="posts[0]?.reading_time" :isNotFirst="false" :post="posts[0]" />
                        <!-- :content="posts[0]?.content"-->
                        <div class="col-12 col-xl-6 mt-3 mt-md-0">
                            <HeroCard class="col-12 d-block" :isSmall="true" :imageUrl="posts[1]?.images[0]?.link"
                                :title="posts[1]?.title" :user="posts[1]?.user.name"
                                :created_at="posts[1]?.created_date" :post="posts[1]" />


                            <div class="row">
                                <HeroCard class="col-12 col-md-6 mt-3" :isLarge="true"
                                    :imageUrl="posts[2]?.images[0]?.link" :title="posts[2]?.title"
                                    :user="posts[2]?.user.name" :created_at="posts[2]?.created_date" :post="posts[2]" />
                                <HeroCard class="col-12 col-md-6 mt-3" :isLarge="true"
                                    :imageUrl="posts[3]?.images[0]?.link" :title="posts[3]?.title"
                                    :user="posts[3]?.user.name" :created_at="posts[3]?.created_date" :post="posts[3]" />
                            </div>
                        </div>
                    </div>

                </div>
                <div class="row my-5">
                    <CardHighLights class="col-12 col-md-7 col-lg-8" />
                    <div class="col-12 col-md-5 col-lg-4"> <!-- Sistemare-->
                        <div class="d-flex align-items-center justify-content-evenly pb-1">
                            <div class="text-center animation" v-for="social in socials" :key="social.name">
                                <a :href="social.url" target="_blank" rel="noopener noreferrer">
                                    <img :src="social.logo" alt="" class="py-2" style="width: 30px;">
                                    <h5 class="fs-5">{{ social.name }}</h5>
                                    <p class="fs-5">{{ social.count }}</p>
                                </a>
                            </div>
                        </div>
                        <TrendingsTopic class="my-4" />
                        <RecentsPosts class="my-4" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../store';
import CardHighLights from '../components/PageComponents/HighLights.vue';
import TrendingsTopic from '../components/PageComponents/TrendingsTopic.vue';
import RecentsPosts from '../components/PageComponents/RecentsPosts.vue';
import HeroCard from '../components/HeroCard.vue';


export default {
    components: {
        CardHighLights,
        TrendingsTopic,
        RecentsPosts,
        HeroCard,
    },
    data() {
        return {

            store,
            posts: [],
            isLoading: true,
            // imageUrl: 'http://127.0.0.1:8000/storage/images/test-post.webp',

            socials: [ // Esempio
                {
                    name: 'Instagram',
                    url: 'http://31.56.7.95/',
                    logo: '/images/instagram.svg',
                    count: '100k'
                },
                {
                    name: 'Facebook',
                    url: 'http://31.56.7.95/',
                    logo: '/images/instagram.svg',
                    count: '150k'
                },
                {
                    name: 'Twitter',
                    url: 'http://31.56.7.95/',
                    logo: '/images/instagram.svg',
                    count: '80k'
                }
            ]
        }
    },
    methods: {
        fetchPosts() {
            axios.get(`${store.appUrl}api/posts`, {
                params: {
                    per_page: 4
                }
            })
                .then(response => {
                    this.posts = response.data.data;
                    this.isLoading = false;

                })
                .catch(error => {
                    console.error("Errore durante il recupero dei post:", error);
                });
        }

    },
    created() {
        this.fetchPosts();
    },
}
</script>

<style lang="scss" scoped></style>
