import { ChangeEvent } from "react";

interface searchProps {
    search: string;
    setSearch: (e: ChangeEvent<HTMLInputElement>) => void
}

const Search = ( {search, setSearch}: searchProps) => {

  return (
    <div>
    <input 
        type="text"
        id="search"
        value={search} 
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search the title"
    />
    </div>
  )
}

export default Search
