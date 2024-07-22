import {create} from 'zustand'
import {devtools, persist} from 'zustand/middleware'

let todoStore = (set) => ({
    todos: [],
    addTodo : (todoText) =>
        set( (state) =>({
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
            set( (state) => ({
                todos: state.todos.filter((todo) => todo.id !== todoId)
            })),
    completeTodo : (todoId) =>
        set( (state) => ({
            todos : state.todos.map((todo) => {
                if(todo.id === todoId){
                    return {
                        ...todo,
                        isCompleted: true
                    }
                }
                return todo
            })
        }))
    })

todoStore = devtools(todoStore);
todoStore = persist(todoStore,{
    name : 'todo-app',
    getStorage: () => sessionStorage 
    // session storage에 저장 -> 브라우저를 닫으면 데이터가 사리진다.
});

export const useTodoStore = create(todoStore);

let id = 0;
function getId(){
    return id++;
}