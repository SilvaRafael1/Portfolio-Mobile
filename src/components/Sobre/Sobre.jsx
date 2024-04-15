import { Text, Image, View, Button } from "react-native";
import styles from "./styles";
import { AntDesign, Entypo, Feather } from "@expo/vector-icons";

export default function Sobre({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.vGeral}>
        <Text style={styles.title}>Rafael Augusto da Silva</Text>
        <Image
          source={require("../../../assets/heroImage.jpg")}
          style={styles.image}
        />
        <Text>
          <AntDesign name="codesquareo" size={16} color="black" /> Desenvolvedor
          Full-Stack{"\n"}
          <Entypo name="home" size={16} color="black" /> Bento Gonçalves, RS,
          Brasil
        </Text>
        <Text style={styles.sobre}>
          <Feather name="arrow-down-right" size={21} color="black" />
          Sobre
        </Text>
        <Text style={styles.button}>
          Atualmente tenho 20 anos;{"\n"}
          Estudante de Análise e Desenvolvimento de Sistema no IFRS;{"\n"}
          Conhecimento nas tecnologias NodeJS, TypeScript, JavaScript, SQL,
          React.
        </Text>
        <Button
          title="Visualizar Certificados"
          onPress={() => navigation.navigate("Certificados")}
        />
      </View>
    </View>
  );
}
