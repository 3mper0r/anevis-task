import { useState, useEffect } from "react";
import BookItem from "./BookItem";
import Search from "./Search";
import useBookStore from "../store/store";

const Books = () => {

    const [error, setError] = useState("")
    const [isLoading, setLoading] = useState(false)
    const [search, setSearch] = useState("")
    
    const { fetchBooks} = useBookStore((state) => state)
    
    useEffect(() => {     
      fetchBooks()  
    }, [])

  return (
    <> 
        {error && <div>{error}</div>}
        <Search search={search} setSearch={setSearch}/>
        { isLoading 
            ? <h1>Loading...</h1> 
            :  <section className="main-section">
                <BookItem search={search} />
                </section>  
        }
    </>
  )
}

export default Books