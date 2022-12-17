import { createContext, useState, useCallback } from "react";
import axios from "axios"

const BookContext = createContext()

const Provider = ({children}) => {

    const [books, setBooks] = useState([])

    const newTab = useCallback(async() => {
        const response = await axios.get('http://localhost:3001/books')
        setBooks(response.data)
        console.log(books)
    }, []) 


    const addBook = async (val) => {
        const response = await axios.post('http://localhost:3001/books', {
            title: val
        })

        setBooks([...books, response.data ])
        console.log("LOOOK==>", books)
    }

    const editBook = async(id, val) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: val
        })
       
        const BooksAfterEdit = books.map(book => {
            if(book.id === id) return {...response.data}
            return book;
        })
        setBooks(BooksAfterEdit)
        
    }

    const deleteBookById = async(id) => {
        const response = await axios.delete(`http://localhost:3001/books/${id}`)

        const BooksAfterDeletion = books.filter(book => book.id !== id)

        setBooks(BooksAfterDeletion)
    }

    //const thingsToShare = {books, newTab, addBook, editBook, deleteBookById}
    
    return <BookContext.Provider value={{books, newTab, addBook, editBook, deleteBookById}}>{children}</BookContext.Provider>
}

export {Provider}
export default BookContext;