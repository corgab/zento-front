<template>
    <div class="container">
        <div class="row py-5">
            <CardHighLights class="col" />
            <div class="col-4"> <!-- Sistemare-->
                <div class="d-flex justify-content-center gap-3 pb-3 flex-wrap">
                    <div class="text-center animation" v-for="social in socials" :key="social.name">
                        <a :href="social.url" target="_blank" rel="noopener noreferrer">
                            <img :src="social.logo" alt="" class="py-2" style="width: 30px;">
                            <h4>{{ social.name }}</h4>
                            <h4>{{ social.count }}</h4>
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
