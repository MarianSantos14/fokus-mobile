import { Ionicons } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { router } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TasksProvider } from '../components/context/TaskProvider';
import Footer from "../components/Footer";


export default function Layout() {
    return (
        <TasksProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <SafeAreaProvider>
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 1 }}>
                            <Drawer
                                screenOptions={{
                                    headerStyle: {
                                        backgroundColor: '#021123'
                                    },
                                    headerTintColor: '#fff',
                                    drawerStyle: {
                                        backgroundColor: '#021123',
                                        borderRadius: 0
                                    },
                                    sceneContainerStyle: {
                                        borderRadius: 0,
                                    },
                                    drawerInactiveTintColor: '#fff',
                                    drawerActiveTintColor: '#B872FF',
                                    drawerActiveBackgroundColor: 'transparent',
                                }}

                                drawerContent={(props) => (
                                    <View style={{ flex: 1, borderRadius: 0 }}>
                                        <DrawerContentScrollView {...props} contentContainerStyle={{ borderRadius: 0 }}>
                                            <DrawerItemList {...props} />
                                        </DrawerContentScrollView>

                                        <Footer />
                                    </View>
                                )}
                            >
                                <Drawer.Screen
                                    name='pomodoro'
                                    options={{
                                        drawerLabel: 'Timer',
                                        title: ''
                                    }}
                                />
                                <Drawer.Screen
                                    name='tasks/index'
                                    options={{
                                        drawerLabel: 'Lista de tarefas',
                                        title: ''
                                    }}
                                />
                                <Drawer.Screen
                                    name='index'
                                    options={{
                                        headerShown: false,
                                        drawerItemStyle: { display: 'none' },
                                    }}
                                />
                                <Drawer.Screen
                                    name='add-task/index'
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
                                    name='edit-task/[id]'
                                    options={{
                                        drawerItemStyle: { display: 'none' },
                                        title: '',
                                    }}
                                />
                            </Drawer>
                        </View>
                    </View>
                </SafeAreaProvider>
            </GestureHandlerRootView>
        </TasksProvider>
    );
}
