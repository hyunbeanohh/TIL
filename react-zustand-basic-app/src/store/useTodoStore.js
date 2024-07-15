import create from 'zustand'

const useTodoStore = () => create((set) => ({
    todos: [],
    addTodo : (todoText) =>
        set( state =>({
            todos:[
                ...state.todos,
                {
                    text: todoText,
                    id: getId(),
                    isCompleted : false
                }
            ]
        })),
    deleteTodo: (todoId) =>
            set( state => ({
                todos: state.todos.filter((todo) => todo.id !== todoId)
            })),
    completeTodo : (todoId) =>
        set( state => ({
            todos : state.todos.map((todo) => {
                if(todo.id === todoId){
                    return {
                        ...todo,
                        isCompleted: !todo.isCompleted
                    }
                }
                return todo
            })
        }))
}))


let id = 0;
function getId(){
    return id++;
}

export default useTodoStore