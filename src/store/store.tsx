import { create } from 'zustand'
import { axiosPrivate } from '../api/axios'
import Cookies from 'js-cookie'
import { FieldValues } from 'react-hook-form'

const BOOKS_URL = '/books'

const useBookStore = create<{
    books: Book[],
    removeBook: (id: string) => void,
    fetchBooks: () => void,
    //updateBook: (id: string, formData: FieldValues) => void
}>
    ((set, get) => ({
    books: [],
    fetchBooks: async () => {
        const controller = new AbortController()
        const {data: books} = await axiosPrivate.get<Book[]>(BOOKS_URL,{
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json, */*',
                'Authorization': `Bearer ${Cookies.get('token')}`,
            },
            signal: controller.signal   
        }) 
        set({books: books})
        return () => controller.abort()
    },
    removeBook: async (id: string) =>  {
        const {data} = await axiosPrivate.delete<Book[]>(`${BOOKS_URL}/${id}`)
    
        set((state) => ({
            ...data,
            books: state.books.filter((newBooks) => newBooks.id !== id)
        }))
    },
    // updateBook: async (id: string, formData: FieldValues) => {
    //     const newbook = get().books.find((book) => book.id === id)
    //     const {data} = await axiosPrivate.patch(`${BOOKS_URL}/${id}`, {id, ...newbook, ...formData})

    //     set((state) => ({
    //         ...state,
    //         books: data
    //     }))
    // }
}))

export default useBookStore