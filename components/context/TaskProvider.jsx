import { createContext, useState } from "react";

export const TaskContent = createContext()

export function TasksProvider({children}) {
    const [tasks, setTasks] = useState([])

    const addTask = (description) => {
        console.log('tarefa adicionada');
        
        setTasks(oldState => {
            return [
                ...oldState,
                {
                    description,
                    id: oldState.length + 1
                }
            ]
        })
    }

    const toggleTaskCompleted = (id) => {
        setTasks(oldState => {
            return oldState.map(t => {
                if (t.id === id) {
                    t.completed = !t.completed
                }
                return t
            })
        })
    }

    const deleteTasks = (id) => {
        setTasks(oldState => {
            return oldState.map(t => {
                return oldState.filter(t => t.id !== id)
            })
        })
    }

    return (
        <TaskContent.Provider value={{
            tasks,
            addTask,
            toggleTaskCompleted,
            deleteTasks
        }}>
            {children}
        </TaskContent.Provider>
    )
}