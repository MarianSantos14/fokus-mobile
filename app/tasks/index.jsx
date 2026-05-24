import { router } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";
import useTaskContent from "../../components/context/useTaskContent";
import FokusButton from "../../components/FokusButton";
import { IconPlus } from "../../components/Icons";
import TaskItem from "../../components/TaskItem";

export default function Tasks() {
    const { tasks, deleteTask, toggleTaskCompleted } = useTaskContent()

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.inner}>
                    <FlatList
                        data={tasks}
                        renderItem={({ item }) => (
                            <TaskItem
                                completed={item.completed}
                                text={item.description}
                                onPressDelete={() => deleteTask(item.id)}
                                onToggleComplete={() => toggleTaskCompleted(item.id)}
                                onPressEdit={() => router.push(`/edit-task/${item.id}`)}
                            />
                        )}
                        ListEmptyComponent={
                            <Text style={styles.text2}>
                                Ainda não há tarefas na sua lista, que tal adicionar?
                            </Text>
                        }
                        keyExtractor={(item) => item.id}
                        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
                        ListHeaderComponent={
                            <Text style={styles.text}>
                                Lista de tarefas:
                            </Text>
                        }
                        ListFooterComponent={
                            <>
                                <View style={{ marginTop: 32 }}>
                                    <FokusButton
                                        title='Adicionar nova tarefa'
                                        icon={<IconPlus outline />}
                                        outline
                                        onPress={() => router.navigate('/add-task')}
                                    />
                                </View>
                            </>
                        }
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
        alignItems: 'center',
        paddingTop: 32
    },
    wrapper: {
        gap: 40,
        width: '90%'
    },
    text: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 26,
        marginBottom: 32
    },
    inner: {
        gap: 8
    },
    text2: {
        fontSize: 24,
        fontWeight: 500,
        color: '#98A0A8',
        textAlign: 'center',
        marginTop: 16,
        marginBottom: 16
    }
})