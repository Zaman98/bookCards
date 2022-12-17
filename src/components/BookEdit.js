import { useState } from "react"
import useCustomHook from "../customHook/customHook"

const BookEdit = ({book, onEdit}) => {

    const {editBook} = useCustomHook()
    const [newTitle, setNewTitle] = useState(book.title)
    const changeTitle = (event) =>{
        setNewTitle(event.target.value)
    }

    const saveNewTitle = (e) => {
        e.preventDefault()
        editBook(book.id, newTitle)
        onEdit()
        setNewTitle('')
    }

    return <>
    <form className="book-edit" onSubmit={saveNewTitle}>
    <label>Title</label>
    <input className="input" type="text" onChange={changeTitle} value={newTitle} autoFocus/>
    <button className="button is-primary">Save</button>
    </form>
    
    </>
}


export default BookEdit