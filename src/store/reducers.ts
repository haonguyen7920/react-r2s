interface Todo {
    id: number;
    title: string;
    isCompleted: boolean;
  }
const dastaJson = localStorage.getItem("TodoList");
const storageTodos: Todo[] = JSON.parse(dastaJson ?? "[]");
const initialState = {
    todos: storageTodos
}

export const todoReducer = (state = initialState, action: any) =>{
    switch (action.type) {
        case "ADD":
            let newID: number;
            state.todos.length === 0 ? (newID = 1) : (newID = state.todos[state.todos.length - 1].id + 1);
            const newTodoItem = {
              id: newID,
              title: action.payload,
              isCompleted: false,
            };
            state.todos.push(newTodoItem);
            return {...state}
        case "DELETE":
           state.todos = state.todos.filter(todo => todo.id !== action.payload)
            return {...state}
        case "CHECK":
            const index = state.todos.findIndex((todo) => todo.id === action.payload);
            const {isCompleted} = state.todos[index];
            state.todos[index] = {...state.todos[index], isCompleted: !isCompleted}
            return {...state}
        case "SAVE":
            const {id,title} = action.payload;
            const k = state.todos.findIndex((todo) => todo.id === id);
            state.todos[k] = { ...state.todos[k], title: title };
            return {...state}
        default:
            return state
    }
}