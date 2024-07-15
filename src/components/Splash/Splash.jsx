import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function Splash() {
  return (
    <View style={styles.container}>
      <Text>Getting Token...</Text>
      <ActivityIndicator size="large" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})