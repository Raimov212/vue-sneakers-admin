<script lang="ts">
import axios from 'axios'

import type { ReturnUserData } from '../types/auth'
import { useAuthStore } from '../stores/auth'

export default {
  data(): ReturnUserData {
    return {
      user: {
        email: '',
        password: ''
      },
      errors: [],
      snackbarError: false
    }
  },
  setup() {
    const userStore = useAuthStore()
    return { userStore }
  },
  methods: {
    validEmail(email: string) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
    closeSnacbar() {
      this.snackbarError = false
      this.errors.length = 0
    },
    async submit() {
      this.errors.length = 0
      if (this.user.email == '') {
        this.snackbarError = true
        return this.errors.push('email is empty')
      } else {
        if (!this.validEmail(this.user.email)) {
          this.snackbarError = true
          return this.errors.push('Invalid Email')
        }
      }
      if (this.user.password == '') {
        this.snackbarError = true
        return this.errors.push('password is empty')
      } else {
        if (this.user.password?.length !== undefined && this.user.password.length < 8) {
          this.snackbarError = true
          return this.errors.push('password must be 8 characters long')
        }
      }

      try {
        const res = await axios.post(`https://01b49c08aa7e0ce4.mokky.dev/auth`, {
          email: this.user.email,
          password: this.user.password
        })
        if (res.status === 201) {
          this.userStore.user.email = res.data.data.email
          this.userStore.user.fullName = res.data.data.fullName
          this.$router.push('/')
        }

        let token = res.data.token
        localStorage.setItem('token', token)

        const myObject = { fullName: res.data.data.fullName, email: res.data.data.email }
        const user = JSON.stringify(myObject)
        localStorage.setItem('user', user)
      } catch (error: any) {
        this.snackbarError = true
        if (error.response.status === 401) {
          return this.errors.push('This user is already exsist')
        }
        console.log(error)
      }
      this.errors.length = 0
    }
  }
}
</script>

<template>
  <div>
    <h1 class="title text-primary">Sign In</h1>
    <v-form @submit.prevent="submit" class="box">
      <v-text-field
        type="email"
        label="Email"
        v-model="user.email"
        hide-details="auto"
      ></v-text-field>
      <v-text-field
        type="password"
        v-model="user.password"
        color="error"
        label="Password"
      ></v-text-field>
      <v-btn type="submit" variant="tonal"> Button </v-btn>
    </v-form>
    <v-snackbar class="error" v-model="snackbarError" color="error" multi-line variant="outlined">
      <div class="snacbar" v-for="(error, index) in errors" :key="index">
        <span class="snacbar-text">
          {{ error }}
        </span>
        <v-btn color="red" variant="text" @click="closeSnacbar"> Close </v-btn>
      </div>
    </v-snackbar>
  </div>
</template>

<style>
.title {
  margin-bottom: 20px;
  margin-top: 10px;
  text-align: center;
}
.box {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.error {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}
.error .error-item {
  color: red;
}
.snacbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.snacbar .snacbar-text {
  color: red;
}
.succesSnacbar {
  color: rgba(12, 197, 12, 0.749);
}
</style>
