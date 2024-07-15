import { useState, useContext } from "react";
import { Button, Text, TextInput, View } from "react-native";
import AuthContext from "../../context/Auth";
import styles from "./styles";

export default function Login({ route }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <View style={styles.vGeral}>
        <Text style={styles.texto}>E-mail</Text>
        <TextInput 
          onChangeText={setEmail} 
          placeholder="Digite seu E-mail"
        />
        <Text style={styles.texto}>Senha</Text>
        <TextInput 
          onChangeText={setPassword}
          placeholder="Digite sua Senha"
          secureTextEntry={true}
        />
        <Button title="Entrar" onPress={() => signIn({ email, password })} />
      </View>
    </View>
  )
}