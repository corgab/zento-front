<template>
    <router-link :to="{ name: 'SinglePost', params: { post: post.slug } }" class="position-relative text-white">
        <img :src="imageUrl" alt=""
            :class="['rounded', 'thumbnail', { 'img-fluid': isNotFirst }, { 'img-small': isSmall }, { 'img-large': isLarge }]">
        <div class="position-absolute pe-5 ps-2">
            <div class="d-flex py-2">
                <p class="bg-primary rounded py-1 px-2 fs-6 m-0" v-for="tag in post.tags">
                    <i class="bi bi-circle-fill"></i> {{ tag.name }}
                </p>
            </div>
            <div>
                <h4>{{ title }}</h4>
                <p class="fs-6 text-break lh-sm"> {{ content }} </p>
            </div>
            <div>
                <p><small>by {{ user }} • {{ created_at }}<span v-if="!isNotFirst"> •
                            {{ read_time }}</span></small></p>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    name: 'HeroCard',
    props: {
        post: {
            type: Object,
            required: true
        },
        imageUrl: {
            type: String,
            required: true,
        },
        isNotFirst: {
            type: Boolean,
            default: true,
        },
        isSmall: {
            type: Boolean,
            default: false
        },
        isLarge: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: false
        },
        user: {
            type: String,
            required: true
        },
        read_time: {
            type: String,
            required: false
        },
        created_at: {
            type: String,
            required: true
        }

    },


}
</script>

<style lang="scss" scoped>
.position-absolute {
    bottom: 1%;
    // top: 1%;
    left: 15px;
    // right: 100px;
    cursor: pointer;
    width: 100%;
    height: auto;
    /* Nasconde la parte dell'immagine che esce dal contenitore */
}


img {
    display: block;
}

.img-small {
    max-height: 250px;
    object-fit: cover;
}

.img-large {
    height: 200px;
    object-fit: cover;
}

.thumbnail {
    display: block;
    width: 100%;
    transition: filter 0.1s ease-in;
    filter: brightness(95%);
}

.thumbnail:hover {
    filter: brightness(70%);

}
</style>