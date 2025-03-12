import { createStackNavigator } from '@react-navigation/stack'
import Tela1 from './Tela1'
import Tela2 from './Tela2'

export default function Pilha() {

    const Stack = createStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen name="Tela1" component={Tela1} options={{ title: 'Última Tela', headerBackTitle: 'Voltar', headerShown: true }} />
            <Stack.Screen name="Tela2" component={Tela2} />
        </Stack.Navigator>
    )
}