import { StyleSheet } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons'
import Inicio from './Inicio'
import Rolagem from './Rolagem'
import Entrada from './Entrada'
import Pilha from '../stack/Tela1'
import Abas from '../tabs/Tela1'


export default function App() {

    const Drawer = createDrawerNavigator()

    function tela(props: {nome: string, icone: string, titulo: string, componente: React.FC }) {
        return (
            <Drawer.Screen 
                name={props.nome} 
                component={props.componente}
                options={{
                    drawerIcon: ({ focused }: any) => (
                        <Ionicons 
                            name={props.icone as any}
                            size={24}
                            color={focused ? '#1c80ff' : '#000'}
                        />
                    ),
                    drawerLabel: props.titulo,
                    title: props.titulo
                }} 
            />
        )
    }

    return (
        <NavigationContainer>
            <Drawer.Navigator>
                {tela({
                    nome: 'Ínicio',
                    icone: 'home-outline',
                    titulo: 'Ínicio',
                    componente: Inicio,
                })}
                {tela({
                    nome: 'Rolagem',
                    icone: 'list-outline',
                    titulo: 'Rolagem',
                    componente: Rolagem,
                })}
                {tela({
                    nome: 'Input',
                    icone: 'key-outline',
                    titulo: 'Input',
                    componente: Entrada,
                })}
                {tela({
                    nome: 'Stack',
                    icone: 'layers-outline',
                    titulo: 'Stack',
                    componente: Pilha,
                })}
                {tela({
                    nome: 'Tabs',
                    icone: 'albums-outline',
                    titulo: 'Tabs',
                    componente: Abas,
                })}
            </Drawer.Navigator>
        </NavigationContainer>
    )    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    texto: {
        color: 'red'
    }
})