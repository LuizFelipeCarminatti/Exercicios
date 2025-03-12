import { View, Text, TextInput, Alert, Pressable } from 'react-native'
import { useState } from 'react'

export default function Entrada() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const clicar = () => {
        Alert.alert(`Enviado = Nome: ${nome} E-mail: ${email} Senha: ${senha}`)
        setNome('')
    }

    return (
        <View>
            <Text>Nome:</Text>
            <TextInput placeholder='Nome:' placeholderTextColor='#888' value={nome} onChangeText={(e) => setNome(e.toLowerCase())}/>
            <Text>E-mail:</Text>
            <TextInput placeholder='E-mail:' placeholderTextColor='#888' value={email} onChangeText={(e) => setEmail(e.toLowerCase())} keyboardType='email-address'/>
            <Text>Senha:</Text>
            <TextInput placeholder='Senha:' placeholderTextColor='#888' value={senha} onChangeText={(e) => setSenha(e.toLowerCase())} secureTextEntry/>
        </View>
    )
}