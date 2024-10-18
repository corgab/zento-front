<template>
    <div class="container">
        <div class="my-5">
            <h2 class="py-2">Crea il tuo account</h2>
            <form @submit.prevent="registerUser">
                <div class="form-floating mb-4">
                    <input type="text" class="form-control" id="name" v-model="user.name" placeholder="Mario"
                        required />
                    <label for="name">Nome</label>
                </div>
                <div class="form-floating mb-4">
                    <input type="email" class="form-control" id="email" v-model="user.email"
                        placeholder="name@example.com" required />
                    <label for="email">Email</label>
                </div>
                <div class="form-floating mb-4">
                    <input type="password" class="form-control" id="password" v-model="user.password"
                        placeholder="Password" required />
                    <label for="password">Password</label>
                </div>
                <div class="form-floating mb-4">
                    <input type="password" class="form-control" id="password_confirmation"
                        v-model="user.password_confirmation" placeholder="Conferma Password" required />
                    <label for="password_confirmation">Conferma Password</label>
                </div>
                <button type="submit" class="btn btn-primary">Invia</button>
            </form>
            <div v-if="successMessage" class="mt-4 text-success">
                <h4>{{ successMessage }}</h4>
            </div>
            <div v-if="errMessage" class="mt-4 text-danger">
                <h4>{{ errMessage }}</h4>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../../store';

export default {
    data() {
        return {
            user: {
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
            },
            errMessage: '',
            successMessage: '',
        };
    },
    methods: {
        registerUser() {
            // Reset dei messaggi di successo e errore
            this.successMessage = '';
            this.errMessage = '';

            store.register(this.user)
                .then(response => {
                    // Mostra messaggio di successo
                    this.successMessage = 'Registrazione avvenuta con successo! Controlla la tua email per la verifica.';
                })
                .catch(error => {
                    if (error.response && error.response.data) {
                        this.errMessage = error.response.data.errMessage || 'Errore nella registrazione.';
                    } else {
                        this.errMessage = 'Si è verificato un errore sconosciuto.';
                    }
                });
        },
    },
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
