import { Pressable, StyleSheet, Text } from "react-native"

export const ActionButton = ({ active, onPress, display, color }) => {
    return (
        <Pressable
            onPress={onPress}
            style={[
                styles.contextButton,
                active && { backgroundColor: color }
            ]}
        >
            <Text style={styles.contextButtonText}>
                {display}
            </Text>
        </Pressable >
    )
}

const styles = StyleSheet.create({
    contextButton: {
        borderRadius: 8,
    },
    contextButtonText: {
        fontSize: 12.5,
        color: '#fff',
        padding: 8,
    },
})