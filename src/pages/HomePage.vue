<template>
    <div class="container">
        <div class="row py-5 gap-1">
            <CardHighLights class="col-auto col-md" />
            <div class="col col-md-5"> <!-- Sistemare-->
                <div class="d-flex align-items-center justify-content-between justify-content-lg-around pb-3 gap-lg-5 ">
                    <div class="text-center animation" v-for="social in socials" :key="social.name">
                        <a :href="social.url" target="_blank" rel="noopener noreferrer">
                            <img :src="social.logo" alt="" class="py-2" style="width: 30px;">
                            <h5>{{ social.name }}</h5>
                            <h5>{{ social.count }}</h5>
                        </a>
                    </div>
                </div>
                <TrendingsTopic class="py-2" />
            </div>
        </div>
    </div>
</template>

<script>
import CardHighLights from '../components/PageComponents/HighLights.vue'
import TrendingsTopic from '../components/PageComponents/TrendingsTopic.vue'

export default {
    components: {
        CardHighLights,
        TrendingsTopic
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
