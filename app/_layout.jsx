import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TasksProvider } from '../components/context/TaskProvider';

export default function Layout() {
    return (
        <TasksProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <SafeAreaProvider>
                    <Drawer
                        screenOptions={{
                            headerStyle: {
                                backgroundColor: '#021123'
                            },
                            headerTintColor: '#fff',
                            drawerStyle: {
                                backgroundColor: '#021123'
                            },
                            drawerLabelStyle: {
                                color: '#fff'
                            }
                        }}
                    >
                        <Drawer.Screen
                            name='index'
                            options={{
                                headerShown: false,
                                drawerItemStyle: { display: 'none' },
                            }}
                        />
                        <Drawer.Screen
                            name='add-task'
                            options={{
                                drawerItemStyle: { display: 'none' },
                                title: '',
                                headerLeft: () => {
                                    return <Ionicons
                                        name='arrow-back'
                                        size={24}
                                        color='#fff'
                                        style={{ marginLeft: 16 }}
                                        onPress={() => router.navigate('/tasks')}
                                    />
                                }
                            }}
                        />
                        <Drawer.Screen
                            name='pomodoro'
                            options={{
                                drawerLabel: 'Timer',
                                title: ''
                            }}
                        />
                        <Drawer.Screen
                            name='tasks'
                            options={{
                                drawerLabel: 'Lista de tarefas',
                                title: ''
                            }}
                        />
                    </Drawer>
                </SafeAreaProvider>
            </GestureHandlerRootView>
        </TasksProvider>
    );
}