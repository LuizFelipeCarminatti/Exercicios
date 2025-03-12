import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Tela1 from './Tela1'
import Tela2 from './Tela2'
import { Ionicons } from "@expo/vector-icons";


export default function Abas() {
    
    const Tabs = createBottomTabNavigator()

    return (
        <Tabs.Navigator>
            <Tabs.Screen name="Tela1" component={Tela1} 
                options={{
                    title: 'Primeira', 
                    tabBarIcon: ({focused}) => (
                        <Ionicons 
                            name="home-outline"
                            size={20}
                            color={focused ? "#1c80ff" : '#000'}
                        />
                    )
                }}
            />
            <Tabs.Screen name="Tela1" component={Tela2}/>
        </Tabs.Navigator>
    )
}