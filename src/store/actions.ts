export const addTodo = (title: string) => {
    return {
        type: "ADD",
        payload: title
    }
}
export const deleteTodo = (id: number) => {
    return {
        type: "DELETE",
        payload: id
    }
}
export const checkTodo = (id: number) => {
    return {
        type: "CHECK",
        payload: id
    }
}
export const saveTodo = (id: number, title: string) => {
    return {
        type: "SAVE",
        payload: {id,title}
    }
}
