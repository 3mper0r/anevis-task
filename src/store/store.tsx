import { create } from 'zustand'
import { axiosPrivate } from '../api/axios'
import Cookies from 'js-cookie'

const BOOKS_URL = '/books'

const useBookStore = create<{
    books: Book[],
    removeBook: (id: string) => void,
    fetchBooks: () => void
}>
    ((set) => ({
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
    }
}))

export default useBookStore