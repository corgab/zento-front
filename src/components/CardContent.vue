<template>
    <!-- LAYOUT DA AGGIUNGERE -->
    <div>
        <div v-for="img in post.images">
            <img v-if="img.is_featured == 1" :src="img.link" alt="" class="img-fluid">
            <small v-for="tag in post.tags">
                {{ tag.name }}
            </small>
        </div>
        <div v-if="post.featured">
            <small>premium</small>
        </div>
        <h1>{{ post.title }}</h1>
        <p class="inline-block text-truncate"></p>
        <p>{{ post.reading_time }}</p>
        <div class="d-flex">
            <div>
                <small>By {{ post.user_name }}</small>
            </div>
            <i class="bi bi-balloon"></i>
            <div>
                <p>{{ post.created_date }}</p>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardContent',
    props: {
        post: {
            type: Object,
            required: true
        }

    }
}
</script>

<style lang="scss" scoped></style>