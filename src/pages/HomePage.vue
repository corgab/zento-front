<template>
    <div class="container">
        <div class="row py-5">
            <CardHighLights class="col"/>
            <div class="col-4">  <!-- Sistemare-->
                <div class="d-flex justify-content-center gap-3 pb-3">
                    <div class="text-center" v-for="social in socials">
                    <img :src="social.logo" alt="" class="py-2" style="width: 30px;">
                    <h4>{{social.name}}</h4>
                    <h4>{{social.count }}</h4>
                </div>
                </div>
                <TrendingsTopic class="py-2"/>
            </div>
            
        </div>
    </div>
</template>

<script>
// import CardContent from "../components/CardContent.vue";
import CardHighLights from '../components/PageComponents/HighLights.vue'
import TrendingsTopic from '../components/PageComponents/TrendingsTopic.vue'

export default {
    components: {
        CardHighLights,
        TrendingsTopic
    },
    data() {
        return {
            socials: [ // Gestione con api 
                { // examples
                    name: 'social1',
                    url: 'http://31.56.7.95/',
                    logo: '/images/instagram.svg',
                    count: '100k'
                },
                {
                    name: 'social2',
                    url: 'http://31.56.7.95/',
                    logo: '/images/instagram.svg',
                    count: '100k'
                },
                {
                    name: 'social3',
                    url: 'http://31.56.7.95/',
                    logo: '/images/instagram.svg',
                    count: '100k'
                }
            ]
        }
    },
}
</script>

<style lang="scss" scoped></style>