type Book = {
    id: string;
    title: string;
    first_publish_year: number;
    number_of_pages_median: number;
    covers: 
        {
            S: string;
            M: string;
            L: string;
        }
    author_name: string
}