<template>
    <div>
        <h3 class="py-3">Trending topics</h3>
        <div class="d-flex flex-column gap-2">
            <router-link class="card-overlay text-decoration-none text-white animation" v-for="tag in tags"
                :key="tag.slug" :to="{ name: 'TagsPage', params: { tag: tag.slug } }">
                <img src="http://127.0.0.1:8000/storage/images/test-post.webp" class="card-img rounded" alt="image tag">
                <div class="card-img-overlay d-flex justify-content-center align-items-center">
                    <h5 class="card-title">{{ tag.name }}</h5>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { store } from '../../store'
export default {
    components: {
        axios,
        store
    },
    data() {
        return {
            store,
            tags: [],
        }
    },
    methods: {
        fetchTags() {
            axios.get(`${store.appUrl}api/tags`, {
                params: {
                    per_page: 5
                }
            }
            ).then(response => {
                this.tags = response.data.data
                // console.log(response.data.data)
                console.log(this.tags)
            })
        },
    },
    mounted() {
        this.fetchTags()
    }
}
</script>

<style lang="scss" scoped>
.card-overlay {
    position: relative;
    overflow: hidden;
}

.card-img {
    // width: 100%;
    height: 70px;

    object-fit: cover;
    filter: brightness(50%);
}

.card-img-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
