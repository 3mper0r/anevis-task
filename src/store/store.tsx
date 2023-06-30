import { create } from 'zustand'
import { axiosPrivate } from '../api/axios'
import Cookies from 'js-cookie'

const BOOKS_URL = '/books'

const useBookStore = create<{
    books: Book[],
    removeBook: (id: string) => void,
    fetchBooks: () => void
    //addBook: (book: Book) => void
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
        set({books})
        return () => controller.abort()
    },
    // addBook: (book: Book) => 
    //     set((state) => ({
    //         books: [
    //             {
    //                  id: book.id, 
    //                  title: book.title, 
    //                  first_publish_year: book.first_publish_year, 
    //                  number_of_pages_median: book.number_of_pages_median, 
    //                  covers: book.covers, 
    //                  author_name: book.author_name,
    //             },
    //             ...state.books, 
    //         ]
    //     })),
    removeBook: (id: string) => 
        set((state) => ({
            ...state,
            books: state.books.filter((newBooks) => newBooks.id !== id)
        }))
}))

export default useBookStore