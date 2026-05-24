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
    padding: 32,

    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 1,
  },
  footerText: {
    textAlign: 'center',
    color: '#98a0a8',
    fontSize: 12.5
  }
})