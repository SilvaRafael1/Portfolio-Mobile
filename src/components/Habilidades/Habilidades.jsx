import { ScrollView, Text, View, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import TecnologiasHook from "../../hooks/TecnologiasHook";
import styles from "./styles";

const Tec = ({ id, title, source }) => (
  <View key={id} style={styles.tecnologias}>
    <Text>{source}</Text>
    <Text>{title}</Text>
  </View>
);

export default function Habilidades() {
  const { tecnologias } = TecnologiasHook();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.vGeral}>
        <View>
          <Text style={styles.experiencia}>
            <Feather name="arrow-down-right" size={21} color="black" />Experiência
          </Text>
          <Text>
            Hospital Tacchini {"\n"}
            Assistente de Suporte de TI{"\n"}
            Março de 2022 - Presente
          </Text>
          <Text>--</Text>
          <Text>
            Compass UOL{"\n"}
            Estágio de Desenvolvimento{"\n"}
            Maio de 2023 - Outubro de 2023{"\n"}
          </Text>
        </View>
        <Text style={styles.experiencia}>
          <Feather name="arrow-down-right" size={21} color="black" />Tecnologias
        </Text>
        <View style={styles.vTecnologias}>
          {tecnologias.map((tec) => (
            <Tec key={tec.id} title={tec.title} source={tec.source} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
