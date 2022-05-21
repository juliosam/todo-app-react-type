import { UseTodos } from "../hooks/useTodos"

export const Title = () => {

    const{ pendingTodos } = UseTodos();
    return(
        <h1> Todos:{pendingTodos}</h1>
    )
}