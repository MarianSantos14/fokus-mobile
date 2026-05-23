import { useRef, useState } from "react"
import { Image, StyleSheet, View } from "react-native"
import { ActionButton } from '../components/ActionButton'
import FokusButton from '../components/FokusButton'
import Footer from "../components/Footer"
import { IconPause, IconPlay } from '../components/Icons'
import { Timer } from '../components/Timer'

const pomodoro = [
  {
    id: 'focus',
    initialValue: 25 * 60,
    image: require('../assets/foco.png'),
    display: 'Foco',
    color: '#7b3fb6',
  },
  {
    id: 'short',
    initialValue: 5 * 60,
    image: require('../assets/descanso-curto.png'),
    display: 'Pausa curta',
    color: '#167863',
  },
  {
    id: 'long',
    initialValue: 15 * 60,
    image: require('../assets/descanso-longo.png'),
    display: 'Pausa longa',
    color: '#144480',
  }
]

export default function Pomodoro() {
  const [timerType, setTimerType] = useState(pomodoro[0])
  const [seconds, setSeconds] = useState(pomodoro[0].initialValue)
  const [timerRunning, setTimerRunning] = useState(false)

  const timerRef = useRef(null)

  const clearTimer = () => {
    if (!timerRef.current != null) {
      clearInterval(timerRef.current)
      timerRef.current = null
      setTimerRunning(false)
    }
  }

  const toggleTimerType = (newTimerType) => {
    setTimerType(newTimerType)
    setSeconds(newTimerType.initialValue)
    clearTimer()
  }

  const toggleTimer = () => {
    if (timerRef.current) {
      clearTimer()
      return
    }

    setTimerRunning(true)

    const id = setInterval(() => {
      setSeconds(oldState => {
        if (oldState === 0) {
          clearTimer()
          return timerType.initialValue
        }
        return oldState - 1
      })
    }, 1000)
    timerRef.current = id
  }

  return (
    <View
      style={styles.container}
    >
      <Image style={styles.img} source={timerType.image} />
      <View style={[styles.actions, { backgroundColor: timerType.color + '50' }, { borderColor: timerType.color }]} >
        <View style={styles.context} >
          {pomodoro.map(p => (
            <ActionButton
              key={p.id}
              active={timerType.id === p.id}
              onPress={() => toggleTimerType(p)}
              display={p.display}
              color={p.color}
            />
          ))}
        </View>
        <Timer totalSeconds={seconds} />
        <FokusButton
          onPress={toggleTimer}
          title={timerRunning ? 'Pausar' : 'Começar'}
          icon={timerRunning ? <IconPause /> : <IconPlay />}
          style={{ backgroundColor: timerType.color }}
        />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#021123',
    gap: 40
  },
  img: {
    width: 350,
    height: 350,
  },
  actions: {
    padding: 24,
    borderRadius: 32,
    width: '80%',
    maxWidth: 350,
    borderWidth: 2,
    borderColor: '#199379',
    gap: 32
  },
  context: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
})