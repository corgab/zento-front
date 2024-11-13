<template>
    <router-link :to="{ name: 'SinglePost', params: { post: post.slug } }" class="position-relative text-white scale">
        <img :src="imageUrl" alt=""
            :class="['rounded', 'thumbnail', { 'img-fluid': isNotFirst }, { 'img-small': isSmall }, { 'img-large': isLarge }]">
        <div class="position-absolute px-2">
            <div class="d-flex py-2">
                <p class="bg-primary rounded py-1 px-2 fs-6 m-0">
                    <i class="bi bi-circle-fill"></i> Tag
                </p>
            </div>
            <div>
                <h4 class="">{{ title }}</h4>
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
    right: 15px;
    cursor: pointer;
}

img {
    filter: brightness(85%);

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
    transition: filter 0.1s ease-in;
}

.thumbnail:hover {
    filter: brightness(70%);
}

.scale:hover {
    display: block;
    transform: scale(1.05);

}
</style>