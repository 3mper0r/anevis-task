const booksData = [
  {
    id: "faker 'datatype.uuid",
    title: "A Tale of Two Cities",
    first_publish_year: 1859,
    number_of_pages_median: 388,
    covers: 
      {
        S: "https://covers.openlibrary.org/b/id/13301713-S.jpg",
        M: "https://covers.openlibrary.org/b/id/13301713-M.jpg",
        L: "https://covers.openlibrary.org/b/id/13301713-L.jpg" 
      },
    author_name: "Charles Dickens"
  },
  {
    id: "faker 'datatype.uuid",
    title: "Le Petit Prince",
    first_publish_year: 1943,
    number_of_pages_median: 133,
    covers: 
      {
        S: "https://covers.openlibrary.org/b/id/12550353-S.jpg",
        M: "https://covers.openlibrary.org/b/id/12550353-M.jpg",
        L: "https://covers.openlibrary.org/b/id/12550353-L.jpg",
      },
    author_name: "Antoine de Saint-Exupéry"
  },
  {
    id: "faker 'datatype.uuid",
    title: "Harry Potter and the Philosopher's Stone",
    first_publish_year: 1997,
    number_of_pages_median: 303,
    covers: 
      {
        S: "https://covers.openlibrary.org/b/id/9327917-S.jpg",
        M: "https://covers.openlibrary.org/b/id/9327917-M.jpg",
        L: "https://covers.openlibrary.org/b/id/9327917-L.jpg",
      },
    author_name: "J. K. Rowling" 
  },
  {
    id: "faker 'datatype.uuid",
    title: "And Then There Were None",
    first_publish_year: 1939,
    number_of_pages_median: 232,
    covers: 
      {
        S: "https://covers.openlibrary.org/b/id/11172296-S.jpg",
        M: "https://covers.openlibrary.org/b/id/11172296-M.jpg",
        L: "https://covers.openlibrary.org/b/id/11172296-L.jpg",
      },
    author_name: "J. K. Rowling" 
  },
  {
    id: "faker 'datatype.uuid",
    title: "The Lord of the Rings",
    first_publish_year: 1954,
    number_of_pages_median: 1193,
    covers: 
      {
        S: "https://covers.openlibrary.org/b/id/9255566-S.jpg",
        M: "https://covers.openlibrary.org/b/id/9255566-M.jpg",
        L: "https://covers.openlibrary.org/b/id/9255566-L.jpg",
      },
    author_name: "J. R. R. Tolkien" 
  },
  {
    id: "faker 'datatype.uuid",
    title: "The Great Gatsby",
    first_publish_year: 1925,
    number_of_pages_median: 186,
    covers: 
      {
        S: "https://covers.openlibrary.org/b/id/10590366-S.jpg",
        M: "https://covers.openlibrary.org/b/id/10590366-M.jpg",
        L: "https://covers.openlibrary.org/b/id/10590366-L.jpg",
      },
    author_name: "F. Scott Fitzgerald" 
  },
  {
    id: "faker 'datatype.uuid",
    title: "Nineteen Eighty-Four",
    first_publish_year: 1949,
    number_of_pages_median: 320,
    covers: 
      {
        S: "https://covers.openlibrary.org/b/id/9267242-S.jpg",
        M: "https://covers.openlibrary.org/b/id/9267242-M.jpg",
        L: "https://covers.openlibrary.org/b/id/9267242-L.jpg",
      },
    author_name: "George Orwell" 
  },
  {
    id: "faker 'datatype.uuid",
    title: "To Kill a Mockingbird",
    first_publish_year: 1960,
    number_of_pages_median: 321,
    covers: 
      {
        S: "https://covers.openlibrary.org/b/id/12606502-S.jpg",
        M: "https://covers.openlibrary.org/b/id/12606502-M.jpg",
        L: "https://covers.openlibrary.org/b/id/12606502-L.jpg",
      },
    author_name: "Harper Lee" 
  }
]

 //\"id\": \"{{faker 'datatype.uuid'}}\",\n    \"title\": \"The Catcher in the Rye\",\n    \"first_publish_year\": 1951,\n    \"number_of_pages_median\": 240,\n    \"covers\": {\n      \"S\": \"https://covers.openlibrary.org/b/id/9273490-S.jpg\",\n      \"M\": \"https://covers.openlibrary.org/b/id/9273490-M.jpg\",\n      \"L\": \"https://covers.openlibrary.org/b/id/9273490-L.jpg\"\n    },\n    \"author_name\": \"J. D. Salinger\"\n  },\n  {\n    \"id\": \"{{faker 'datatype.uuid'}}\",\n    \"title\": \"Don Quixote\",\n    \"first_publish_year\": 1605,\n    \"number_of_pages_median\": 442,\n    \"covers\": {\n      \"S\": \"https://covers.openlibrary.org/b/id/9655663-S.jpg\",\n      \"M\": \"https://covers.openlibrary.org/b/id/9655663-M.jpg\",\n      \"L\": \"https://covers.openlibrary.org/b/id/9655663-L.jpg\"\n    },\n    \"author_name\": \"Miguel de Cervantes Saavedra\"\n  },\n  {\n    \"id\": \"{{faker 'datatype.uuid'}}\",\n    \"title\": \"The Hobbit\",\n    \"first_publish_year\": 1937,\n    \"number_of_pages_median\": 310,\n    \"covers\": {\n      \"S\": \"https://covers.openlibrary.org/b/id/8406786-S.jpg\",\n      \"M\": \"https://covers.openlibrary.org/b/id/8406786-M.jpg\",\n      \"L\": \"https://covers.openlibrary.org/b/id/8406786-L.jpg\"\n    },\n    \"author_name\": \"J. R. R. Tolkien\"\n  },\n  {\n    \"id\": \"{{faker 'datatype.uuid'}}\",\n    \"title\": \"Pride and Prejudice\",\n    \"first_publish_year\": 1813,\n    \"number_of_pages_median\": 350,\n    \"covers\": {\n      \"S\": \"https://covers.openlibrary.org/b/id/12648793-S.jpg\",\n      \"M\": \"https://covers.openlibrary.org/b/id/12648793-M.jpg\",\n      \"L\": \"https://covers.openlibrary.org/b/id/12648793-L.jpg\"\n    },\n    \"author_name\": \"Jane Austen\"\n  },\n  {\n    \"id\": \"{{faker 'datatype.uuid'}}\",\n    \"title\": \"The Lion, the Witch and the Wardrobe\",\n    \"first_publish_year\": 1950,\n    \"number_of_pages_median\": 187,\n    \"covers\": {\n      \"S\": \"https://covers.openlibrary.org/b/id/8441376-S.jpg\",\n      \"M\": \"https://covers.openlibrary.org/b/id/8441376-M.jpg\",\n      \"L\": \"https://covers.openlibrary.org/b/id/8441376-L.jpg\"\n    },\n    \"author_name\": \"C. S. Lewis\"\n  },\n  {\n    \"id\": \"{{faker 'datatype.uuid'}}\",\n    \"title\": \"The Da Vinci Code\",\n    \"first_publish_year\": 2003,\n    \"number_of_pages_median\": 489,\n    \"covers\": {\n      \"S\": \"https://covers.openlibrary.org/b/id/9255229-S.jpg\",\n      \"M\": \"https://covers.openlibrary.org/b/id/9255229-M.jpg\",\n      \"L\": \"https://covers.openlibrary.org/b/id/9255229-L.jpg\"\n    },\n    \"author_name\": \"Dan Brown\"\n  },\n  {\n    \"id\": \"{{faker 'datatype.uuid'}}\",\n    \"title\": \"O Alquimista\",\n    \"first_publish_year\": 1988,\n    \"number_of_pages_median\": 192,\n    \"covers\": {\n      \"S\": \"https://covers.openlibrary.org/b/id/7414780-S.jpg\",\n      \"M\": \"https://covers.openlibrary.org/b/id/7414780-M.jpg\",\n      \"L\": \"https://covers.openlibrary.org/b/id/7414780-L.jpg\"\n    },\n    \"author_name\": \"Paulo Coelho\"\n  },\n  {\n    \"id\": \"{{faker 'datatype.uuid'}}\",\n    \"title\": \"The Bridges of Madison County\",\n    \"first_publish_year\": 1992,\n    \"number_of_pages_median\": 184,\n    \"covers\": {\n      \"S\": \"https://covers.openlibrary.org/b/id/490280-S.jpg\",\n      \"M\": \"https://covers.openlibrary.org/b/id/490280-M.jpg\",\n      \"L\": \"https://covers.openlibrary.org/b/id/490280-L.jpg\"\n    },\n    \"author_name\": \"Robert James Waller\"\n  },\n  {\n    \"id\": \"{{faker 'datatype.uuid'}}\",\n    \"title\": \"Ben-Hur: A Tale of the Christ\",\n    \"first_publish_year\": 1880,\n    \"number_of_pages_median\": 544,\n    \"covers\": {\n      \"S\": \"https://covers.openlibrary.org/b/id/8237803-S.jpg\",\n      \"M\": \"https://covers.openlibrary.org/b/id/8237803-M.jpg\",\n      \"L\": \"https://covers.openlibrary.org/b/id/8237803-L.jpg\"\n    },\n    \"author_name\": \"Lew Wallace\"\n  },\n  {\n    \"id\": \"{{faker 'datatype.uuid'}}\",\n    \"title\": \"You Can Heal Your life\",\n    \"first_publish_year\": 1984,\n    \"number_of_pages_median\": 244,\n    \"covers\": {\n      \"S\": \"https://covers.openlibrary.org/b/id/715608-S.jpg\",\n      \"M\": \"https://covers.openlibrary.org/b/id/715608-M.jpg\",\n      \"L\": \"https://covers.openlibrary.org/b/id/715608-L.jpg\"\n    },\n    \"author_name\": \"Louise L. Hay\"\n  },\n  {\n    \"id\": \"{{faker 'datatype.uuid'}}\",\n    \"title\": \"Cien años de soledad\",\n    \"first_publish_year\": 1967,\n    \"number_of_pages_median\": 432,\n    \"covers\": {\n      \"S\": \"https://covers.openlibrary.org/b/id/8314483-S.jpg\",\n      \"M\": \"https://covers.openlibrary.org/b/id/8314483-M.jpg\",\n      \"L\": \"https://covers.openlibrary.org/b/id/8314483-L.jpg\"\n    },\n    \"author_name\": \"Gabriel García Márquez\"\n  },\n  {\n    \"id\": \"{{faker 'datatype.uuid'}}\",\n    \"title\": \"Lolita\",\n    \"first_publish_year\": 1955,\n    \"number_of_pages_median\": 364,\n    \"covers\": {\n      \"S\": \"https://covers.openlibrary.org/b/id/12984540-S.jpg\",\n      \"M\": \"https://covers.openlibrary.org/b/id/12984540-M.jpg\",\n      \"L\": \"https://covers.openlibrary.org/b/id/12984540-L.jpg\"\n    },\n    \"author_name\": \"Vladimir Nabokov\"\n  }\n]\n"

export default booksData