<template>
    <div class="col-6">
        <div class="card">
            <router-link class="card-overlay text-decoration-none card-title"
                :to="{ name: 'SinglePost', params: { post: post.slug } }">
                <div v-for="img in post.images" class="position-relative">
                    <img v-if="img.is_featured == 1" :src="img.link" class="card-img-top img-thumbnail p-0 border-white"
                        alt="...">
                    <!-- Immagine preset -->

                    <div class="position-absolute d-flex gap-3 tag">
                        <p class="bg-primary text-white py-1 px-2">
                            <i class="bi bi-circle-fill"></i> {{ post.tags[0].name }}
                        </p>
                    </div>
                </div>
            </router-link>
            <div class="card-body">
                <div v-if="post.featured" class="card-text"> <!-- da sistemare-->
                    <div class="d-flex fs-6 gap-1 text-body-tertiary">
                        <i class="bi bi-exclamation-circle d-block"></i>
                        <p>Premium</p> <!-- Colore -->

                    </div>
                </div>
                <router-link class="card-overlay text-decoration-none card-title"
                    :to="{ name: 'SinglePost', params: { post: post.slug } }">
                    <h5 class="fs-4 title">{{ post.title }}</h5>
                </router-link>
                <p class="card-text">{{ post.reading_time }}</p>
            </div>
            <div class="card-footer bg-body d-flex justify-content-between align-items-center">
                <img src="#" alt="user img">
                <p class="fs-6 text-body-secondary ">by {{ post.user.name }} • {{ post.created_date }}</p>

            </div>
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
    // mounted() {
    //     console.log(this.post)
    // }
}
</script>

<style lang="scss" scoped>
.img-thumbnail {
    width: 100%;
    height: 100%;
    transition: filter 0.1s ease-in;
}

.img-thumbnail:hover {
    filter: brightness(70%);
}

.tag {
    bottom: 5%;
    left: 2%;
}

.title {
    transition: text-decoration 0.5s ease-in-out;
}

.title:hover {
    text-decoration: underline;
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
</style>
