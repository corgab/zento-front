<template>
    <section>
        <div class="container">
            <div class="my-4">
                <div class="row">
                    <router-link class="col-auto text-decoration-none" v-for="tag in post.tags" :key="tag.slug"
                        :to="{ name: 'TagsPage', params: { tag: tag.slug } }">
                        <h4>{{ tag.name }}</h4>
                    </router-link>
                </div>
                <h1 class="serif4 title">{{ post.title }}</h1>
                <div class="infos text-body-secondary py-3">
                    <div>
                        <p>{{ post.created_at }} - {{ post.reading_time }}</p>
                    </div>
                    <div>
                        <!-- socials -->
                    </div>
                </div>
                <hr>
                <div class="roboto my-5">
                    <div v-for="featuredImage in post.images" :key="featuredImage.url">
                        <img :src="featuredImage.url" alt="" v-if="featuredImage.is_featured == 1">
                    </div>
                    <!-- Da inserire riassunto post -->
                    <!-- Sezioni -->
                    <img src="/public/images/divider.png" alt="" class="py-5"> <!-- DA CAMBIARE-->
                    <div class="">
                        <div v-for="section in post.sections" :key="section.id">
                            <h2 class="post-title">{{ section.title }}</h2>
                            <p class="serif4 lh-base mb-0 fs-5">{{ section.content }}</p>
                            <img src="/public/images/divider.png" alt="" class="py-5"> <!-- DA CAMBIARE-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
import axios from 'axios'
import { store } from '../store'
export default {
    data() {
        return {
            post: []
        }
    },
    methods: {
        fetchPost() {
            const slug = this.$route.params.post; // Ottieni lo slug dalla rotta
            console.log(slug)
            axios.get(`${store.appUrl}api/posts/${slug}`)
                .then(response => {
                    this.post = response.data; // Imposta i post
                    console.log(this.post)
                })
        }
    },
    mounted() {
        this.fetchPost()
    }

}
</script>

<style lang="scss" scoped>
.container {
    max-width: 668px;
}

.h1 {
    font-weight: 500;
}

.serif4.title {
    font-weight: 600;

}

.infos {
    font-weight: 400;
}

.post-body {

    font-weight: 500;
}
</style>