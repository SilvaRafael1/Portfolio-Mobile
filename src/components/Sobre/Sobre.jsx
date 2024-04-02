import { ScrollView, Text, SafeAreaView, Image, View, Button } from "react-native";
import styles from "./styles";

export default function Sobre({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView >
        <Text>
          Rafael Augusto da Silva
        </Text>
        <Image source={require("../../../assets/heroImage.jpg")} />
        <Text>
          Desenvolvedor Full-Stack{"\n"}
          20 anos{"\n"}
          Bento Gonçalves, RS, Brasil
        </Text>
        <Text>
          Sobre
        </Text>
        <Text>
          Estudante de Análise e Desenvolvimento de Sistema no IFRS. {"\n"}
          Conhecimento nas tecnologias NodeJS, TypeScript, JavaScript, SQL, React.
        </Text>
        <Button title="Visualizar Certificados" onPress={() => navigation.navigate("Certificados")} />
      </ScrollView>
    </SafeAreaView>
  );
}
