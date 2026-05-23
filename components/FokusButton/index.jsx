import { Pressable, StyleSheet, Text } from "react-native"

const FokusButton = ({ onPress, title, icon, style, outline }) => {
    return (
        <Pressable style={[styles.button, style, outline && styles.outlineButton]} onPress={onPress}>
            {icon}
            <Text style={[styles.buttonText, outline && style.outlineButtonText]}>
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
    outlineButton: {
        backgroundColor: 'transparent',
        borderColor: '#B872FF',
        borderWidth: 2,
    },  
    buttonText: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 600,
        color: '#021123'
    },
    outlineButtonText: {
        color: '#B872FF'
    }
})

export default FokusButton