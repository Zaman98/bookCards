import { useState } from "react"
import useCustomHook from "../customHook/customHook"

const BookCreate = () => {
    const {addBook} = useCustomHook()
    const addNewTitle = (e) =>{
        e.preventDefault()
        addBook(title)
        setTitle('')
    }

    const [title, setTitle] = useState('')

    const newTitle = (event) =>{
        setTitle(event.target.value)
    }

    return <>
   <div className="book-create">
   <h3>Add a Book</h3>
   <form onSubmit={addNewTitle}>

        <label>Title <br/>
        <input className="input" type="text"  onChange={newTitle} value={title}/>
        </label>
        <button className="button">Submit</button>
        </form>

   </div>
    
    </>
}


export default BookCreate