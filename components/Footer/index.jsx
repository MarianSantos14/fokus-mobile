import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>Projeto fictício e sem fins comerciais</Text>
            <Text style={styles.footerText}>Desenvolvido por Alura</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  footer: {
    width: '80%',
  },
  footerText: {
    textAlign: 'center',
    color: '#98a0a8',
    fontSize: 12.5
  }
})