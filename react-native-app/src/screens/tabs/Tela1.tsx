import { View, Text, StyleSheet, Pressable } from "react-native";

export default function Tela1({ navigation }: any) {
    


    return (
        <View>
            <Text>Clique para ir até a Tela2</Text>
            <Pressable onPress={() => navigation.navigate('Tela2')}>
                <Text>Clique</Text>
            </Pressable>
        </View>
    )
}