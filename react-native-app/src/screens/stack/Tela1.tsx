import { View, Text, StyleSheet, Pressable, Button } from "react-native";

export default function Tela1({ navigation }: any) {
    


    return (
        <View style={styles.principal}>
            <Text>Clique para ir até a Tela2</Text>
            <Pressable onPress={() => navigation.navigate('Tela2')} style={styles.botao}>
                <Text>Clique</Text>
            </Pressable>
            <Button onPress={() => navigation.navigate('Tela2')} title="Clique"/>
        </View>
    )
}

const styles = StyleSheet.create({
    principal: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    botao: {
        width: 100,
        height: 40,
        backgroundColor: "#f05",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        color: '#fff',
        borderRadius: 10,
    }
})