<template>
    <div class="container">
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
</template>

<script>
import CardHighLights from '../components/PageComponents/HighLights.vue'
import TrendingsTopic from '../components/PageComponents/TrendingsTopic.vue'
import RecentsPosts from '../components/PageComponents/RecentsPosts.vue';

export default {
    components: {
        CardHighLights,
        TrendingsTopic,
        RecentsPosts
    },
    data() {
        return {
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
}
</script>

<style lang="scss" scoped></style>
