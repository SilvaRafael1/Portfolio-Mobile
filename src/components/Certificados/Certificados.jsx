import { Button, Text, View, TextInput } from "react-native"
import CertificadosHook from "../../hooks/CertificadosHook"
import { useState } from "react"

const Item = ({title}) => (
  <View>
    <Text>{title}</Text>
  </View>
)

export default function Certificados() {
  const { cert, setCert } = CertificadosHook()
  const [text, onChangeText] = useState('')

  const handlePress = () => {
    setCert([...cert, {id: Math.random(), title: text}])
  }

  return (
    <View>
      <Text>
        {
          cert.map((item) => <Item key={Math.random()} title={item.title} />)
        }
      </Text>

      <View>
        <Text>Título do Certificado</Text>
        <TextInput onChangeText={onChangeText} value={text} placeholder="Título do Certificado" />
        <Button title="Adicionar" onPress={handlePress} />
      </View>
    </View>
  )
}