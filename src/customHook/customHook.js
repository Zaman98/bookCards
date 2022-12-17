import { useContext } from "react";
import BookContext from "../context/books";

const useCustomHook = () => {
    const {books, newTab, addBook, editBook, deleteBookById} = useContext(BookContext)
    return {books, newTab, addBook, editBook, deleteBookById}
}

export default useCustomHook;