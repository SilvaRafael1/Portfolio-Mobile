import { useContext } from "react";
import AuthContext from "../../context/Auth";
import { Button, Text, View } from "react-native";
import styles from "./styles";

export default function SignOut() {
  const { signOut } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <View style={styles.vGeral}>
        <Text style={styles.texto}>Sair</Text>
        <Button title="Sair" onPress={() => signOut()} />
      </View>
    </View>
  )
}