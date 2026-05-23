import { Text, View } from "react-native";
import TaskItem from "../components/TaskItem";
import FokusButton from "../components/FokusButton";

export default function Tasks() {
    return (
        <View>
            <Text>
                Lista de tarefas:
            </Text>
            <View>
                <TaskItem
                    completed
                    text="estudar React"
                />
                <TaskItem
                    text="estudar React-Native"
                />
            </View>
        <FokusButton title='Adicionar nova tarefa' />
        </View>
    )
}