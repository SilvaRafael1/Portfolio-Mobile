import { Button, Text, View, TextInput } from "react-native"
import CertificadosHook from "../../hooks/CertificadosHook"
import { Feather } from "@expo/vector-icons";
import { useState } from "react"
import styles from "./styles";

const Item = ({title}) => (
  <View>
    <Text>{title}</Text>
  </View>
)

export default function Certificados() {
  const { cert, setCert } = CertificadosHook()
  const [text, onChangeText] = useState('')

  const handlePress = () => {
    if(!text) {
      return
    }
    setCert([...cert, {id: Math.random(), title: text}])
  }

  return (
    <View style={styles.container}>
      <View style={styles.vGeral}>
        <Text style={styles.certificados}>
          <Feather name="arrow-down-right" size={21} color="black" />Lista de Certificados:
        </Text>
        <View>
          {
            cert.map((item) => <Item key={Math.random()} title={item.title} />)
          }
        </View>

        <View>
          <Text style={styles.addCertificado}><Feather name="arrow-down-right" size={21} color="black" />Adicionar certificado:</Text>
          <Text>Título do Certificado:</Text>
          <TextInput onChangeText={onChangeText} value={text} placeholder="Título do Certificado" style={styles.input} />
          <Button title="Adicionar" onPress={handlePress} />
        </View>
      </View>
    </View>
  )
}