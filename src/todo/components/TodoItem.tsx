import {Todo} from "../interfaces/interfaces"
import { UseTodos } from "../hooks/useTodos"

interface props{
    todo: Todo
}

export const TodoItem = ({todo}:props) =>{

    //const {toggleTodo} = useContext(TodoContext)

    // const handleDbClick = ()=>{
    //     toggleTodo(todo.id)
    // }
    const {toggleTodo} = UseTodos()

    return(
        <li 
        style={{cursor:'pointer', textDecoration:todo.completed ?'line-through':''}}
        onDoubleClick={()=>toggleTodo(todo.id)}>
           {todo.desc}
        </li>

    )
}