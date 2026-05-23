import { router } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";
import useTaskContent from "../components/context/useTaskContent";
import FokusButton from "../components/FokusButton";
import { IconPlus } from "../components/Icons";
import TaskItem from "../components/TaskItem";


export default function Tasks() {
    const { tasks } = useTaskContent()

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.inner}>
                    <FlatList
                        data={tasks}
                        renderItem={({ item }) =>
                            <TaskItem
                                key={item.id}
                                completed={item.completed}
                                text={item.description}
                            />}
                        keyExtractor={item => item.id}
                        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
                        ListHeaderComponent={
                            <Text style={styles.text}>
                                Lista de tarefas:
                            </Text>
                        }
                        ListFooterComponent={
                            <View styles={{ marginTop: 16}}>
                                <FokusButton
                                    title='Adicionar nova tarefa'
                                    icon={<IconPlus autline />}
                                    outline
                                    onPress={() => router.navigate('/add-task')} />
                            </View>}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#021123',
        alignItems: 'center'
    },
    wrapper: {
        gap: 40,
        width: '90%'
    },
    text: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 26,
        marginBottom: 16
    },
    inner: {
        gap: 8
    }
})