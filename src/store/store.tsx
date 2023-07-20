import { create } from 'zustand'
import { axiosPrivate } from '../api/axios'
import Cookies from 'js-cookie'
import { FieldValues } from 'react-hook-form'

const BOOKS_URL = '/books'

const useBookStore = create<{
    books: Book[],
    addNewBook: (id: string, formData: FieldValues) => void,
    removeBook: (id: string) => void,
    fetchBooks: () => void,
    updateBook: (bookId: string, formData: FieldValues) => void
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
    addNewBook: async (id, formData) => {
        
            const response = await axiosPrivate.post(BOOKS_URL,{ id: id, ...formData}, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json, */*',
                    'Authorization': `Bearer ${Cookies.get('token')}`
                },
            })
                
    },
    removeBook: async (id) =>  {
        const {data} = await axiosPrivate.delete<Book[]>(`${BOOKS_URL}/${id}`)
    
        set((state) => ({
            ...data,
            books: state.books.filter((newBooks) => newBooks.id !== id)
        }))
    },
    updateBook: async (bookId, formData) => {
        const target = get().books.find((book) => book.id === bookId)
        const updatedBook = {bookId, ...target, ...formData}
    
        const {data} = await axiosPrivate.patch(`${BOOKS_URL}/${bookId}`, {...updatedBook})
        set((state) => ({
            ...state,
            data            
        }))                                                                            
    }
}))

export default useBookStore