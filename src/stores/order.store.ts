import axios from 'axios'
import type { OrdersDataType } from '../types/order.d'
import { defineStore } from 'pinia'

export const useOrderStore = defineStore('order', {
  state: () => ({
    orders: [] as OrdersDataType[]
  }),
  actions: {
    async fetchDataOrder() {
      try {
        const { data } = await axios.get('https://01b49c08aa7e0ce4.mokky.dev/orders')
        console.log('store', data)
        if (data) {
          this.orders = data
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
})
