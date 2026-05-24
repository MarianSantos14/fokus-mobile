import { router } from "expo-router";
import { useState } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { IconSave } from "../../components/Icons";
import useTaskContent from "../../components/context/useTaskContent";

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

    const Wrapper = Platform.OS === 'web' ? View : TouchableWithoutFeedback;
    const wrapperProps =
        Platform.OS === 'web'
            ? {}
            : { onPress: Keyboard.dismiss };

    const Container = Platform.OS === 'web' ? View : KeyboardAvoidingView;

    const containerProps =
        Platform.OS === 'web'
            ? { style: { flex: 1,  backgroundColor: '#021123' }}
            : {
                style: { flex: 1 },
                behavior: Platform.OS === 'ios' ? 'padding' : 'height',
            };

    return (
        <Container {...containerProps} >
            <Wrapper {...wrapperProps}>
                <View style={styles.container}>
                    <Text style={styles.text} >Adicionar tarefa:</Text>

                    <View style={styles.inner}>
                        <Text style={styles.label}>Em que que você está trabalhando?</Text>
                        <TextInput
                            style={styles.input}
                            numberOfLines={10}
                            multiline={true}
                            value={description}
                            onChangeText={setDescription}
                            blurOnSubmit={false}
                        />
                        <View style={styles.actions} >
                            <Pressable style={styles.button} onPress={submitTask}>
                                <IconSave />
                                <Text>Salvar</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Wrapper>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: '#021123',
        paddingTop: 32
    },
    text: {
        color: '#fff',
        fontSize: 26,
        marginBottom: 16
    },
    inner: {
        backgroundColor: '#98A0A8',
        width: '90%',
        borderRadius: 8,
        padding: 16,
        gap: 32,
        marginBottom: 32
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
        justifyContent: 'flex-end',
    }
})
