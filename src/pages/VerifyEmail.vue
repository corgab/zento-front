<template>
    <div class="container">
        <h2>Verifica Email</h2>
        <div v-if="loading">Verificando...</div>
        <div v-if="successMessage" class="text-success">{{ successMessage }}</div>
        <div v-if="errMessage" class="text-danger">{{ errMessage }}</div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            loading: true,
            successMessage: '',
            errMessage: '',
        };
    },
    created() {
        this.verifyEmail();
    },
    methods: {
        verifyEmail() {
            const queryParams = new URLSearchParams(window.location.search);
            const email = queryParams.get('email');
            const token = queryParams.get('token');

            axios.post('http://localhost:8000/api/verify-email', { email, token })
                .then(response => {
                    this.successMessage = 'Email verificata con successo! Puoi ora accedere al tuo account.';
                    this.loading = false;
                })
                .catch(error => {
                    this.errMessage = error.response.data.message || 'Si è verificato un errore durante la verifica dell\'email.';
                    this.loading = false;
                });
        }
    }
};
</script>

<style scoped>
.container {
    max-width: 570px;
}

.text-success {
    color: green;
}

.text-danger {
    color: red;
}
</style>
