import { zodResolver } from "@hookform/resolvers/zod"
import { FieldValues, useForm } from "react-hook-form"
import { z } from "zod"
import axios from "../api/axios"

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
         .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
         .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
         "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
    authorName: z.string().min(4, { message: "Author name is too short" }),
    bookPages: z.string().min(2),
    publishedYear: z.string().min(4)
})

type AddBookForm = z.infer<typeof addBookSchema>

const AddBook = ({isVisible, handleClose}: ModalProps) => {
 
    const {
        register, 
        handleSubmit, 
        reset,
        formState: {errors, isValid},
    } = useForm<AddBookForm>({ resolver: zodResolver(addBookSchema)})

    const handleNewBook = async ( data: FieldValues,) => {
        
        console.log(data);
        try {
            const response = await axios.post(BOOKS_URL, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json, */*'
                },
            })
        }catch(err){
            console.log(`Error: ${err}`);
        }  
    }

    if (!isVisible) return null

  return (
    <div className="fixed inset-0 backdrop-blur-md flex justify-center items-center ">
        <form onSubmit={handleSubmit(handleNewBook)} className="bg-gray-400 p-10">
            <h2 className="">AddBook</h2>
            <label htmlFor="booktitle">Title</label>
            <input 
                {...register("bookTitle")}
                type="text" 
                id="booktitle" 
            />
            {errors.bookTitle && (
                <p>{errors.bookTitle.message}</p>
            )} 
            <label htmlFor="bookCover">Cover</label>
            <input 
                {...register("bookCover")}
                type="file"  
                id="bookCover" 
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
                onClick={() => reset()} 
            >
            Save book</button>
            <button onClick={handleClose} type="reset">Cancel</button>
        </form>
    </div>
    
  )
}

export default AddBook