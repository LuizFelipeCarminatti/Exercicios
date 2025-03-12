import { View, Text, StyleSheet } from "react-native";


export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>React Native Essencial</Text>
            <Text style={styles.ajuda}>Use o Drawer Navigation na parte suoerior esquerdo para navegar!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    titulo: {
        fontSize: 24,
        fontWeight: '300',
    },

    ajuda: {
        fontSize: 24,
        color: "#666",
        textAlign: 'center',
        paddingHorizontal: 30
    }
})