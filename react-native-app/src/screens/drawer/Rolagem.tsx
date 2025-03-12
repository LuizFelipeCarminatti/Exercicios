import { StyleSheet, ScrollView, Image } from "react-native";


export default function Rolagem() {
    return (
        <ScrollView>
            <div>
                <h1>Imagem 1</h1>
                <Image source={require('../../../assets/minha-imagem.jpg')} style={styles.tamanho}/>
            </div>
            <div>
                <h1>Imagem 2</h1>
                <Image source={require('../../../assets/minha-imagem.jpg')} style={styles.tamanho}/>
            </div>
            <div>
                <h1>Imagem 3</h1>
                <Image source={require('../../../assets/minha-imagem.jpg')} style={styles.tamanho}/>
            </div>
            <div>
                <h1>Imagem 4</h1>
                <Image source={require('../../../assets/minha-imagem.jpg')} style={styles.tamanho}/>
            </div>
            <div>
                <h1>Imagem 5</h1>
                <Image source={require('../../../assets/minha-imagem.jpg')} style={styles.tamanho}/>
            </div>
            <div>
                <h1>Imagem 6</h1>
                <Image source={require('../../../assets/minha-imagem.jpg')} style={styles.tamanho}/>
            </div>
            <div>
                <h1>Imagem 7</h1>
                <Image source={require('../../../assets/minha-imagem.jpg')} style={styles.tamanho}/>
            </div>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    tamanho: {
        width: 200,
    }
})