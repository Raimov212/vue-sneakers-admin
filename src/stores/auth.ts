import type { UserType } from '@/types/auth'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: (): UserType => ({
    user: {
      email: '',
      fullName: ''
    }
  })
})
