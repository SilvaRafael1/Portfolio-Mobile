import { SafeAreaView, ScrollView, Text, View, Image } from "react-native"
import TecnologiasHook from "../../hooks/TecnologiasHook"
import styles from "./styles"

const Tec = ({ id, title, source }) => (
  <View key={id} style={styles.tecnologias}>
    <Text>{source}</Text>
    <Text>{title}</Text>
  </View>
)

export default function Habilidades() {
  const { tecnologias } = TecnologiasHook()

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Experiência</Text>
          <Text>
            Hospital Tacchini {"\n"}
            Assistente de Suporte de TI{"\n"}
            Março de 2022 - Presente
          </Text>
          <Text>
            Compass UOL{"\n"}
            Estágio de Desenvolvimento{"\n"}
            Maio de 2023 - Outubro de 2023
          </Text>
        </View>
          <Text>Tecnologias</Text>
        <View>
          {
            tecnologias.map((tec) => <Tec key={tec.id} title={tec.title} source={tec.source} />)
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}