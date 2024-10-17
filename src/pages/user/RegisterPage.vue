<template>
    <div class="container">
        <div class="my-5">
            <h2 class="py-2">Crea il tuo account</h2>
            <form @submit.prevent="registerUser">
                <div class="form-floating mb-4">
                    <input type="text" class="form-control" id="name" v-model="user.name" placeholder="Mario">
                    <label for="name">Nome</label>
                </div>
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
                <div class="form-floating mb-4">
                    <input type="password" class="form-control" id="password_confirmation"
                        v-model="user.password_confirmation" placeholder="Conferma Password">
                    <label for="password_confirmation">Conferma Password</label>
                </div>
                <button type="submit" class="btn btn-primary">Invia</button>
            </form>
            <div v-if="errMessage" class="mt-4">
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
            errMessage: ''
        };
    },
    methods: {
        registerUser() {
            store.register(this.user)
                .then(response => {
                    this.$router.push('/dashboard');
                })
                .catch(error => {
                    this.errMessage = error.response.data.errMessage;
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