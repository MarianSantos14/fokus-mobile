import { useContext } from "react";
import { TaskContent } from "./TaskProvider";

export default function useTaskContent() {
    const context = useContext(TaskContent)
    if(!context) {
        throw new Error('Tentando acessar o contexto fora do TasksProvider')
    }

    return context
}