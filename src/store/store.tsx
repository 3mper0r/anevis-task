import { create } from 'zustand'
import { axiosPrivate, axiosPublic } from '../api/axios'
import Cookies from 'js-cookie'
import { FieldValues } from 'react-hook-form'

const BOOKS_URL = '/books'

type newBook = {
    title: string,
    pages: number,
    published_year: number
}

const useBookStore = create<{
    books: Book[],
    //updatedBook: object,
    fetchBooks: () => void,
    //updateBook: (id: string, formData: FieldValues) => void,
    removeBook: (id: string) => void,
}>
    ((set, get) => ({
    books: [],
    //updatedBook: {},
    fetchBooks: async () => {
        const controller = new AbortController()
        const {data: books} = await axiosPrivate.get<Book[]>(BOOKS_URL,{
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json, */*',
                'Authorization': `Bearer ${Cookies.get('token')}`
            },
            signal: controller.signal   
        })
        set ({books: books})
        return () => controller.abort()
    },
    // updateBook: async (title: string, formData: FieldValues) => {
    //     const singleBook = get().books.find((book) => book.title === title)
    //     console.log(singleBook);
        
    //     const {data} = await axiosPrivate.patch(`${BOOKS_URL}/${title}`, {
    //         formData
    //     }) 
    //     console.log(data);
    //     set((state) => ({
    //         ...state,
    //         updatedBook: {...formData, singleBook}
    //     }))
    // },
    removeBook: async (id: string) => {
        const {data} = await axiosPrivate.delete<Book[]>(`${BOOKS_URL}/${id}`)
    
        set((state) => ({
            ...data,
            books: state.books.filter((newBooks) => newBooks.id !== id)
        }))
    }
}))

export default useBookStore