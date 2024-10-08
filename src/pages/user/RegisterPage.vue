<template>
    <div>
        <div class="container">
            <h1>Register</h1>
            <form @submit.prevent="registerUser">
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="name" name="user" placeholder="Mario"
                        v-model="user.name">
                    <label for="name">Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="email" placeholder="name@example.com"
                        v-model="user.email">
                    <label for="email">Email address</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="password" name="password" placeholder="Password"
                        v-model="user.password">
                    <label for="password">Password</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="password_confirmation" name="password_confirmation"
                        placeholder="Password" v-model="user.password_confirmation">
                    <label for="password_confirmation">Confirm Password</label>
                </div>
                <button type="submit" class="btn btn-primary">Invia</button>
            </form>
            <div v-if="errMessage" class="mt-3">
                <h4>{{ errMessage }}</h4>
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

<style lang="scss" scoped></style>