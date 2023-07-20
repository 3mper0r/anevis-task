import { zodResolver } from "@hookform/resolvers/zod"
import { FieldValues, useForm } from "react-hook-form"
import { z } from "zod"
import { axiosPrivate } from "../api/axios"
import { v4 as uuidv4 } from 'uuid';
import useBookStore from "../store/store"
import Cookies from "js-cookie";

const BOOKS_URL = '/books'
interface ModalProps {
    isVisible: boolean;
    handleClose: () => void
}

const addBookSchema = z.object({
    title: z.string().min(4, { message: "Username too short" }),
    covers: z.string(),
    author_name: z.string().min(4, { message: "Author name is too short" }),
    number_of_pages_median: z.string().min(2, { message: "Type a valid number"}),
    first_publish_year: z.string().min(4, { message: "Type a valid year"})
})

type AddBookForm = z.infer<typeof addBookSchema>

const AddBook = ({isVisible, handleClose}: ModalProps) => {
    const id: string  = uuidv4()
    const {fetchBooks, addNewBook} = useBookStore((state) => state)
    const {
        register, 
        handleSubmit,
        reset,
        formState: {errors, isValid},
    } = useForm<AddBookForm>({ resolver: zodResolver(addBookSchema)})

    const onSubmit = async ( formData: FieldValues ) => {
        addNewBook(id, formData)
        reset()
        handleClose()
        fetchBooks()
    }

    if (!isVisible) return null

  return (
    <div className="fixed inset-0 backdrop-blur-md flex justify-center items-center ">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-400 p-10">
            <h2 className="">AddBook</h2>
            <label htmlFor="title">Title</label>
            <input 
                {...register("title")}
                type="text" 
                id="title" 
                placeholder="Book Title"
            />
            {errors.title && (
                <p>{errors.title.message}</p>
            )} 
            <label htmlFor="covers">Cover</label>
            <input 
                {...register("covers")}
                type="text"
                id="covers"
                placeholder="https://covers.openlibrary.org"
            /> 
            {errors.covers && (
                <p>{errors.covers?.message}</p>
            )} 
            <label htmlFor="author_name">Author</label>
            <input
                {...register("author_name")} 
                type="text" 
                id="author_name"
                placeholder="Author Name" 
            />
            {errors.author_name && (
                <p>{errors.author_name.message}</p>
            )}
            <label htmlFor="number_of_pages_median">Pages</label>
            <input 
                {...register("number_of_pages_median")}
                type="number" 
                id="number_of_pages_median" 
                placeholder="Number of pages"
            />
            {errors.number_of_pages_median && (
                <p>{errors.number_of_pages_median.message}</p>
            )}
            <label htmlFor="first_publish_year">Published Year</label>
            <input
                {...register("first_publish_year")} 
                type="number" 
                id="first_publish_year"
                placeholder="Published Year"
            />
            {errors.first_publish_year && (
                <p>{errors.first_publish_year.message}</p>
            )}
            <button
                type="submit" 
                disabled={!isValid}
            >
            Save book</button>
            <button onClick={handleClose} type="reset">Cancel</button>
        </form>
    </div>  
  )
}

export default AddBook