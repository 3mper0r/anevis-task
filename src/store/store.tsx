import { create } from 'zustand'
import axios from '../api/axios'

const BOOKS_URL = '/books'

const useBookStore = create<{
    books: Book[],
    addBook: (book: Book) => void
    removeBook: (title: string) => void,
    fetchBooks: () => void
}>
    ((set, get) => ({
    books: [],
    fetchBooks: async () => {
        const controller = new AbortController()
        const response = await axios.get<Book[]>(BOOKS_URL,{
            signal: controller.signal   
        })
        set({books: response.data})
        return () => controller.abort()
    },
    addBook: (book: Book) => 
        set((state) => ({
            books: [
                ...state.books, 
                {
                     id: book.id, 
                     title: book.title, 
                     first_publish_year: book.first_publish_year, 
                     number_of_pages_median: book.number_of_pages_median, 
                     covers: book.covers, 
                     author_name: book.author_name,
                },
            ]
        })),
    removeBook: (title: string) => 
        set((state) => ({
            ...state,
            books: state.books.filter((newBooks) => newBooks.title !== title)
        }))
}))

export default useBookStore