import type { Todos } from '@/types/todos'
import axios from 'axios'
import { defineStore } from 'pinia'

export const useTodosStore = defineStore('todos', {
  state: () => ({
    todos: <Todos[]>[],
    filters: {
      sortBy: 'title',
      searchQuery: ''
    }
  }),

  actions: {
    async fetchData() {
      const params = {
        sortBy: this.filters.sortBy
      }

      if (this.filters.searchQuery) {
        Object.assign(params, { title: `*${this.filters.searchQuery}` })
      }

      try {
        const { data } = await axios.get('https://01b49c08aa7e0ce4.mokky.dev/sneakers', {
          params
        })
        if (data) {
          this.todos = data
        }
      } catch (error) {
        console.log(error)
      }
    },
    async toggleWatched(id: number) {
      try {
        const idx = this.todos.findIndex((el) => el.id === id)
        const isWatched = !this.todos[idx].isWatched
        const data = await axios.patch(`https://01b49c08aa7e0ce4.mokky.dev/sneakers/${id}`, {
          isWatched
        })
        console.log(data)
      } catch (error) {
        console.log(error)
      }
      await this.fetchData()
    },
    async deleteTodo(id: number) {
      try {
        await axios.delete(`https://01b49c08aa7e0ce4.mokky.dev/sneakers/${id}`)
      } catch (error) {
        console.log(error)
      }
      await this.fetchData()
    },
    async addTodoProduct(obj: any) {
      try {
        const res = await axios.post(`https://01b49c08aa7e0ce4.mokky.dev/sneakers`, obj)
        console.log(res)
      } catch (error) {
        console.log(error)
      }
      await this.fetchData()
    },
    async updateProduct(value: string) {
      this.filters.searchQuery = value

      await this.fetchData()
    },
    async editProduct(itemCurrentId: string, obj: any) {
      console.log('itemCurrentId', itemCurrentId)
      try {
        const res = await axios.patch(
          `https://01b49c08aa7e0ce4.mokky.dev/sneakers/${itemCurrentId}`,
          obj
        )
        console.log(res)
      } catch (error) {
        console.log(error)
      }
      await this.fetchData()
    }
  },
  getters: {
    getTodos(): Todos[] {
      return this.todos
    },
    watchedTodos(): Todos[] {
      return this.todos.filter((el) => el.isWatched)
    },
    totalCountTodos(): number {
      return this.todos.length
    }
  }
})
