<template>
    <div class="container">
        <div class="my-5">
            <h2 class="py-2">Accedi al tuo account</h2>
            <form @submit.prevent="loginUser">
                <div class="form-floating mb-4">
                    <input type="email" class="form-control" id="email" v-model="user.email"
                        placeholder="name@example.com">
                    <label for="email">Email</label>
                </div>
                <div class="form-floating mb-4">
                    <input type="password" class="form-control" id="password" v-model="user.password"
                        placeholder="Password">
                    <label for="password">Password</label>
                </div>
                <button type="submit" class="btn btn-primary">Accedi</button>
            </form>
            <div v-if="message" class="my-3">
                <h5>{{ message }}</h5>
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
                email: '',
                password: '',
            },
            message: ''
        };
    },
    methods: {
        loginUser() {
            store.login(this.user)
                .then(response => {
                    this.message = response.data.success;
                    this.$router.push('/dashboard'); // Reindirizza alla dashboard
                })
                .catch(error => {
                    this.message = error.response.data.errMessage; // Mostra il messaggio d'errore
                });
        }
    }
};
</script>

<style scoped>
.container {
    max-width: 570px;
}
</style>