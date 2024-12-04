<template>
    <div id="carouselExampleIndicators" class="carousel slide">
        <!-- Indicatori del carosello -->
        <div class="carousel-indicators">
            <button v-for="(group, index) in groupedPosts" :key="'indicator-' + index" type="button"
                :data-bs-target="'#carouselExampleIndicators'" :data-bs-slide-to="index"
                :class="{ active: index === currentIndex }" @click="goToSlide(index)"
                aria-label="'Slide ' + (index + 1)"></button>
        </div>

        <!-- Contenuto del carosello -->
        <div class="carousel-inner">
            <div v-for="(group, index) in groupedPosts" :key="'group-' + index"
                :class="['carousel-item', { active: index === currentIndex }]">
                <!-- Mostra la row solo se il gruppo è quello attivo -->
                <div v-if="index === currentIndex" class="row">
                    <div v-for="(post, postIndex) in group" :key="'post-' + postIndex" class="col-3">
                        <CardContent :imageUrl="post.images[0]?.link" :title="post.title" :user="post.user.name"
                            :created_at="post.created_date" :read_time="post.reading_time" :post="post" />
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import CardContent from './CardContent.vue';

export default {
    name: 'PostCarousel',
    props: {
        posts: {
            type: Array,
            required: true
        }
    },
    components: {
        CardContent
    },
    data() {
        return {
            currentIndex: 0, // Indice del gruppo attivo
            autoSlideInterval: null // Riferimento all'intervallo per il cambio automatico
        };
    },
    computed: {
        // Divide i post in gruppi di 4
        groupedPosts() {
            const groupSize = 4;
            return this.posts.reduce((acc, post, index) => {
                const groupIndex = Math.floor(index / groupSize);
                if (!acc[groupIndex]) acc[groupIndex] = [];
                acc[groupIndex].push(post);
                return acc;
            }, []);
        }
    },
    mounted() {
        // Imposta l'intervallo per il cambio automatico ogni 5 secondi
        this.autoSlideInterval = setInterval(() => {
            this.nextSlide();
        }, 5000);
    },
    beforeDestroy() {
        // Pulisce l'intervallo quando il componente viene distrutto
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
        }
    },
    methods: {
        prevSlide() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
            } else {
                this.currentIndex = this.groupedPosts.length - 1; // Torna all'ultimo gruppo
            }
        },
        nextSlide() {
            if (this.currentIndex < this.groupedPosts.length - 1) {
                this.currentIndex++;
            } else {
                this.currentIndex = 0; // Torna al primo gruppo
            }
        },
        goToSlide(index) {
            this.currentIndex = index; // Vai al gruppo specificato
        }
    }
};
</script>

<style lang="scss" scoped>
.carousel-item {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.5s ease, opacity 0.5s ease;
}

.carousel-inner .row {
    width: 100%;
    /* Assicura che le card si distribuiscano correttamente */
}

.carousel-indicators button {
    width: 10px;
    height: 10px;
    background-color: #6c757d;
    border: none;
    border-radius: 50%;
    margin: 0 5px;
    transition: background-color 0.3s ease;
}

.carousel-indicators button.active {
    background-color: #0d6efd;
}

.col-3 {
    padding: 10px;
    /* Spaziatura tra le card */
}
</style>
