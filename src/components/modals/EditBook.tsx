import { zodResolver } from "@hookform/resolvers/zod"
import { FieldValues, useForm } from "react-hook-form"
import { z } from "zod"
import { axiosPrivate } from "../../api/axios"
import useBookStore from "../../store/store"
import { useParams } from "react-router-dom"

const BOOKS_URL = '/books'

interface editModal {
    bookId: string;
    isVisible: boolean;
    handleClose: () => void
}

const EditBookSchema = z.object({
    title: z.string().min(4, { message: "Username too short" }),
    number_of_pages_median: z.string().min(2, { message: "Type a valid number"}),
    first_publish_year: z.string().min(4, { message: "Type a valid year"})
})

type EditBookForm = z.infer<typeof EditBookSchema>


const EditBook = ({bookId, isVisible, handleClose }: editModal) => {
    const {books, fetchBooks} = useBookStore((state) => state)
    
    const {
        register, 
        handleSubmit,
        reset,
        formState: {errors, isValid},
    } = useForm<EditBookForm>({ resolver: zodResolver(EditBookSchema)})
    
    console.log(bookId);
    const handleEdit = async (formData: FieldValues) => {       
        
        
        const target = books.find((book) => book.id === bookId)
        const updatedBook = {bookId, ...target, ...formData}
        try {

            const {data} = await axiosPrivate.patch(`${BOOKS_URL}/${bookId}`, {...updatedBook})
            console.log(bookId);
                       
                                                                           
            //reset()                    
            handleClose()
            fetchBooks()
                                     
        } catch (err) {
            console.log(`Error: ${err}`);
        }
    }

    if (!isVisible) return null

  return (
    <div className="fixed inset-0 backdrop-blur-md flex justify-center items-center ">
        <form onSubmit={handleSubmit(handleEdit)} className="bg-gray-400 p-10">
            <h2 className="">Edit Book</h2>         
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
            <label htmlFor="number_of_pages_median">Pages</label>
            <input 
                {...register('number_of_pages_median')}
                type="number"
                id="number_of_pages_median" 
                placeholder="Number of Pages"
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
            Update book</button>
            <button onClick={handleClose} type="reset">Cancel</button>
        </form>
    </div>  
  )
}

export default EditBook
