import { useState } from "react"
import BookEdit from "./BookEdit"
import useCustomHook from "../customHook/customHook"

const BookShow = ({book}) => {
    const {deleteBookById} = useCustomHook()
    const deleteThis = () =>{
        deleteBookById(book.id)
    }

    const[edit, setEdit] = useState(false)

    const EditFunc = (id, value) => {
        setEdit(!edit)
    }

     const ToggleEdit = () => {
        setEdit(!edit)
        
     }

    let content = <h1>{book.title}</h1>
    if(edit){
        content = <BookEdit onEdit={EditFunc} book={book} />
    }

    return <>
    <div className="book-show">
    <img src={`https://picsum.photos/seed/${book.id}//200/300`} />
    <div className="actions">
       <button onClick={ToggleEdit} className="edit">edit</button>
       <button className="delete" onClick={deleteThis}>X</button> 
       
   </div>
   
        {content}
    </div>
    </>
}


export default BookShow