import { Button, Text, View, TextInput } from "react-native"
import { Feather } from "@expo/vector-icons";
import { useEffect, useState } from "react"
import styles from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import client from "../../../api/Api"

const Item = ({title}) => (
  <View>
    <Text>{title}</Text>
  </View>
)

export default function Certificados() {
  const [token, setToken] = useState('')
  const [text, onChangeText] = useState('')
  const [certificados, setCertificados] = useState([])

  const getInfos = async () => {
    try {
      const certificados = await client.get("/certificados")
      const token = await AsyncStorage.getItem('@storage_Key')
      if(token) {
        setToken(token)
      }
      if(certificados.data) {
        setCertificados(certificados.data)
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handlePress = async () => {
    if(!text) {
      return
    }
    await client.post("/certificados", {title: text})
    setCertificados([...certificados, {id: Math.random(), title: text}])
    onChangeText('')
  }

  useEffect(() => {
    getInfos()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.vGeral}>
        <Text style={styles.certificados}>
          <Feather name="arrow-down-right" size={21} color="black" />Lista de Certificados:
        </Text>
        <View>
          {
            certificados.map((item) => <Item key={item.id} title={item.title} />)
          }
        </View>

        {token ? (
          <View>
            <Text style={styles.addCertificado}><Feather name="arrow-down-right" size={21} color="black" />Adicionar certificado:</Text>
            <Text>Título do Certificado:</Text>
            <TextInput onChangeText={onChangeText} value={text} placeholder="Título do Certificado" style={styles.input} />
            <Button title="Adicionar" onPress={handlePress} />
          </View>
        ) : (
          <View></View>
        )}
      </View>
    </View>
  )
}