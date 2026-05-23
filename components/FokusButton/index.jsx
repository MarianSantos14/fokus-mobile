import { Pressable, StyleSheet, Text } from "react-native"

export const FokusButton = ({ onPress, title, icon, style }) => {
    return (
        <Pressable style={[styles.button, style]} onPress={onPress}>
            {icon}
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        padding: 8,
        borderRadius: 32,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        justifyContent: 'center',
        backgroundColor: '#B872FF'
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 600,
        color: '#021123'
    }
})