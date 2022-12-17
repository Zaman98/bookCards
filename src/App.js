import { useEffect, useContext } from "react"
import BookCreate from "./components/BookCreate"
import BookList from "./components/BookList"
import BookContext from "./context/books"


const App = () => {
    const {newTab} = useContext(BookContext)
    //newTab()
    useEffect(()=>{
        console.log("INSIDE !!!!!!")
        newTab()
        
    }, [newTab])
    console.log("running")
   
    return <>

    <div className="app">
    <h1>Reading list</h1>
    
    <BookList />
    <BookCreate />
    </div>
    </>
}
export default App