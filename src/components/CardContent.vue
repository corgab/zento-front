<template>
    <div class="">
        <div class="card">
            <router-link class="text-decoration-none card-title"
                :to="{ name: 'SinglePost', params: { post: post.slug } }">
                <div class="position-relative img-container">
                    <img v-if="featuredImage" :src="featuredImage.link"
                        class="card-img-top img-thumbnail p-0 border-white"
                        :alt="featuredImage.alt || 'Immagine in primo piano'">
                </div>
                <div class="position-absolute tag">
                    <p class="bg-primary text-white py-1 px-2 fs-6">
                        <i class="bi bi-circle-fill"></i> {{ post.tags[0].name }}
                    </p>
                </div>
            </router-link>
        </div>
        <div class="card-body">
            <div v-if="post.featured" class="card-text">
                <div class="d-flex fs-6 gap-1 text-body-tertiary">
                    <i class="bi bi-exclamation-circle d-block"></i>
                    <p>Premium</p>
                </div>
            </div>
            <router-link class="text-decoration-none card-title"
                :to="{ name: 'SinglePost', params: { post: post.slug } }">
                <h5 class="fs-4 title pt-1">{{ post.title }}</h5>
            </router-link>
            <p class="card-text">{{ post.reading_time }}</p>
        </div>
        <div class="card-footer bg-body d-flex justify-content-between align-items-center">
            <img src="#" alt="user img">
            <p class="fs-6 text-body-secondary">by {{ post.user.name }} • {{ post.created_date }}</p>
        </div>
    </div>
</template>


<script>
import { RouterLink } from 'vue-router';

export default {
    name: 'CardContent',
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    computed: {
        featuredImage() {
            return this.post.images.find(img => img.is_featured === 1);
        }
    }
    // mounted() {
    //     console.log(this.post)
    // }
}
</script>

<style lang="scss" scoped>
.tag {
    // font-size: .7rem;
    bottom: 5%;
    left: 2%;
    cursor: pointer;
}

.card {
    --bs-card-border-width: 0,
        --bs-card-spacer-y: 0rem;
    --bs-card-spacer-x: 0rem;
}

.card-footer {
    border-top: 0;
    padding: 2% 0px;
}

.img-container {
    aspect-ratio: 16 / 9;
}

.img-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
