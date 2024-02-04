import axios from 'axios'
import { defineStore } from 'pinia'
import type { UserType } from '@/types/auth'

export const useUserStore = defineStore('users', {
  state: () => ({
    users: [] as UserType[]
  }),
  actions: {
    async fetchDataUser() {
      try {
        const { data } = await axios.get('https://01b49c08aa7e0ce4.mokky.dev/users')
        if (data) {
          this.users = data
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
})
