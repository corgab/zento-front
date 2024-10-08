<template>
    <div>
        <div class="container">
            <div class="my-5">
                <h2 class="py-2">Crea il tuo account</h2>
                <form @submit.prevent="registerUser">
                    <div class="form-floating mb-4">
                        <input type="text" class="form-control" id="name" name="user" placeholder="Mario"
                            v-model="user.name">
                        <label for="name">Nome</label>
                    </div>
                    <div class="form-floating mb-4">
                        <input type="email" class="form-control" id="email" placeholder="name@example.com"
                            v-model="user.email">
                        <label for="email">Email</label>
                    </div>
                    <div class="form-floating mb-4">
                        <input type="password" class="form-control" id="password" name="password" placeholder="Password"
                            v-model="user.password">
                        <label for="password">Password</label>
                    </div>
                    <div class="form-floating mb-4">
                        <input type="password" class="form-control" id="password_confirmation"
                            name="password_confirmation" placeholder="Password" v-model="user.password_confirmation">
                        <label for="password_confirmation">Conferma Password</label>
                    </div>
                    <div class="d-sm-flex justify-content-sm-between align-items-center py-2 py-sm-0">
                        <button type="submit" class="btn btn-primary">Invia</button>
                        <p class="fs-5 mb-0 pt-2">Hai già un account? <router-link to="/login">Loggati</router-link>
                        </p>
                    </div>
                </form>
                <div v-if="errMessage" class="mt-4">
                    <h4>{{ errMessage }}</h4>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../../store'
export default {
    data() {
        return {
            store,
            user: {
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
            },
            errMessage: ''
        }
    },
    methods: {
        registerUser() {
            axios.post(`${store.appUrl}api/register`, this.user)
                .then(response => {
                    const user = response.data.user
                    const token = response.data.token
                    console.log('Registrazione riuscita:', response.data);
                    store.setAuth(token, user);
                    this.$router.push('/dashboard');

                })
                .catch(error => {
                    console.log(error.response.data)
                    this.errMessage = error.response.data.errMessage
                })

        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    max-width: 570px;
}
</style>