import BookShow from "./BookShow"
import useCustomHook from "../customHook/customHook"

const BookList = () => {

    const {books} =  useCustomHook()

    const list = books.map(book => <BookShow id={book.id} book={book}/>)
    return <>

    <div className="book-list">
        {list}
    </div>
    </>
}


export default BookList