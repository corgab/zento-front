<template>
    <div class="container">
        <h1>Login</h1>
        <form @submit.prevent="loginUser">
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="email" placeholder="name@example.com" v-model="user.email">
                <label for="email">Email address</label>
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="password" name="password" placeholder="Password"
                    v-model="user.password">
                <label for="password">Password</label>
            </div>
            <button type="submit" class="btn btn-primary">Invia</button>
        </form>
        <div v-if="message" class="my-3">
            <h5>{{ message }}</h5>
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

<style lang="scss" scoped></style>