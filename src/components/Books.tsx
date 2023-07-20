import { useState, useEffect } from "react";
import BookItem from "./BookItem";
import Navigation from "./Navigation";
import useBookStore from "../store/store";
import { ErrorBoundary } from "react-error-boundary";

const Books = (id: string) => {

    const [search, setSearch] = useState("")   
    const { fetchBooks } = useBookStore((state) => state)

    useEffect(() => {     
      fetchBooks()
    }, [])

  return (
    <> 
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Navigation search={search} setSearch={setSearch} />  
        <section className="main-section" >
          <BookItem search={search} id={id} />
        </section>   
      </ErrorBoundary>  
    </>
  )
}

export default Books