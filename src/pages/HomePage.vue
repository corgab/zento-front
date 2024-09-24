<template>
    <div class="container">
        <div class="row py-5">
            <CardHighLights class="col"/>
            <div class="row col-auto">
                <div class="col text-center" v-for="social in socials">
                    <img :src="social.logo" alt="" style="width: 30px;">
                    <h1>{{social.name}}</h1>
                    <h1>{{social.count }}</h1>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import CardContent from "../components/CardContent.vue";
import CardHighLights from '../components/PageComponents/HighLights.vue'

export default {
    components: {
        CardHighLights
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