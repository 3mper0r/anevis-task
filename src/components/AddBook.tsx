import { zodResolver } from "@hookform/resolvers/zod"
import { FieldValues, useForm } from "react-hook-form"
import { z } from "zod"
import useAuth from "../hooks/useAuth"
import { axiosPrivate } from "../api/axios"
import { v4 as uuidv4 } from 'uuid';

const BOOKS_URL = '/books'
const MAX_FILE_SIZE = 500000
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"]

interface ModalProps {
    isVisible: boolean;
    showModal: boolean;
    handleClose: () => void
}

const addBookSchema = z.object({
    bookTitle: z.string().min(4, { message: "Username too short" }),
    bookCover: z
         .any()
         .refine((files) => files?.length == 1, "Image is required")
         .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, "Max file size is 5MB.")
         .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
         "Only .jpg, .jpeg, .png and .webp formats are supported."),
    authorName: z.string().min(4, { message: "Author name is too short" }),
    bookPages: z.string().min(2, { message: "Type a valid number"}),
    publishedYear: z.string().min(4, { message: "Type a valid year"})
})

type AddBookForm = z.infer<typeof addBookSchema>

const AddBook = ({isVisible, handleClose}: ModalProps) => {
    const id: string  = uuidv4()
    //const { addNewBook } = useBookStore((state)=> state)
    const { setAuth }:any = useAuth()
    const {
        register, 
        handleSubmit,
        formState: {errors, isValid},
    } = useForm<AddBookForm>({ resolver: zodResolver(addBookSchema)})

    const onSubmit = async ( formData: FieldValues ) => {
        try {
            const response = await axiosPrivate.post(BOOKS_URL,
                JSON.stringify({ id: id, ...formData})
            )
            console.log(JSON.stringify(response?.data));
            const token = response?.data?.token        
            setAuth(formData, {token})     
        }        
        catch(err) {
            console.log(`Error: ${err}`);
        }
    }

    if (!isVisible) return null

  return (
    <div className="fixed inset-0 backdrop-blur-md flex justify-center items-center ">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-400 p-10">
            <h2 className="">AddBook</h2>
            <label htmlFor="bookTitle">Title</label>
            <input 
                {...register("bookTitle")}
                type="text" 
                id="bookTitle" 
            />
            {errors.bookTitle && (
                <p>{errors.bookTitle.message}</p>
            )} 
            <label htmlFor="bookCover">Cover</label>
            <input 
                {...register("bookCover")}
                type="file"
                id="bookCover" 
                datatype="image"

            /> 
            {errors.bookCover && (
                <p>{errors.bookCover?.message}</p>
            )} 
            <label htmlFor="authorName">Author</label>
            <input
                {...register("authorName")} 
                type="text" 
                id="authorName" 
            />
            {errors.authorName && (
                <p>{errors.authorName.message}</p>
            )}
            <label htmlFor="bookPages">Pages</label>
            <input 
                {...register("bookPages")}
                type="number" 
                id="bookPages" 
            />
            {errors.bookPages && (
                <p>{errors.bookPages.message}</p>
            )}
            <label htmlFor="publishedYear">Published Year</label>
            <input
                {...register("publishedYear")} 
                type="number" 
                id="publishedYear" 
            />
            {errors.publishedYear && (
                <p>{errors.publishedYear.message}</p>
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