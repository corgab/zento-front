<template>
    <div class="container">
        <div class="my-5">
            <h2 class="py-2">Accedi al tuo account</h2>
            <form @submit.prevent="loginUser">
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
                <div class="d-sm-flex justify-content-sm-between align-items-center py-2 py-sm-0">
                    <button type="submit" class="btn btn-primary btn-lg">Accedi</button>
                    <p class="fs-4 mb-0 pt-2">Non hai un account? <router-link to="/register">Registrati</router-link>
                    </p>
                </div>

            </form>
            <div v-if="message" class="my-3">
                <h5>{{ message }}</h5>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../../store';
import axios from 'axios'
export default {
    data() {
        return {
            store,
            user: {
                email: '',
                password: '',
            },
            message: ''
        }
    },
    methods: {
        loginUser() {
            axios.post(`${store.appUrl}api/login`, this.user)
                .then(response => {
                    this.message = response.data.success
                    const user = response.data.user
                    const token = response.data.token;
                    store.setAuth(token, user);
                    console.log(response.data)
                    this.$router.push('/dashboard');


                }).catch(error => {
                    this.message = error.response.data.errMessage
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