import { Keyboard, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { IconSave } from "../components/Icons";
import useTaskContent from "../components/context/useTaskContent";
import { useState } from "react";
import { router } from "expo-router";

export default function AddTasks() {
    const [description, setDescription] = useState('')

    const { addTask } = useTaskContent()

    const submitTask = () => {
        if (!description) {
            return 
        }

        addTask(description)
        setDescription('')
        router.navigate('/tasks')
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                <View style={styles.container}>
                    <Text style={styles.text} >Adicionar tarefa:</Text>

                    <View style={styles.inner} >
                        <Text style={styles.label}>Em que que você está trabalhando?</Text>
                        <TextInput
                            style={styles.input}
                            numberOfLines={10}
                            multiline={true}
                            value={description}
                            onChangeText={setDescription}
                        />
                        <View style={styles.actions}>
                            <Pressable style={styles.button} onPress={submitTask}>
                                <IconSave />
                                <Text>Salvar</Text>
                            </Pressable>
                        </View>
                    </View>                    
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: '#021123',
        gap: 16
    },
    text: {
        color: '#fff',
        fontSize: 26,
    },
    inner: {
        backgroundColor: '#98A0A8',
        width: '90%',
        borderRadius: 8,
        padding: 16,
        gap: 32
    },
    label: {
        color: '#021123',
        fontWeight: 600,
        fontSize: 18
    },
    input: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        height: 100
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
})