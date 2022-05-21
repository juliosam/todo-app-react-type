// import { useContext } from "react"
// import { TodoContext } from "../context/todoContext"
import { TodoItem } from "./TodoItem";
import { UseTodos } from "../hooks/useTodos";

export const TodoList = () => {
    // const {todoState} = useContext(TodoContext);
    // const {todos} = todoState;

    const{todos} = UseTodos();

    return (
        <ul>
            {todos.map(todo => < TodoItem key={todo.id} todo={todo}/>)}
        </ul>
    )
}