import { router } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import { FokusButton } from '../components/FokusButton';
import Footer from "../components/Footer";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/fokus-logo.png')}></Image>
      <Text style={styles.title}>Otimize sua{'\n'}produtividade,
        <Text style={styles.strong}>{'\n'}mergulhe no que{'\n'}importa</Text>
      </Text>
      <Image style={styles.img} source={require('../assets/imagem-tela-inicial.png')}></Image>
      <FokusButton
        title='Quero iniciar!'
        onPress={() => router.replace('/pomodoro')} />
      <Footer></Footer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#021123',
    gap: 40,
    padding: 30
  },
  title: {
    fontSize: 26,
    fontWeight: 200,
    color: "#fff",
    textAlign: 'center'
  },
  strong: {
    fontWeight: 400,
  },
  img: {
    width: 350,
    height: 350,
  },
})