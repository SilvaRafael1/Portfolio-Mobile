import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    backgroundColor: "#545E75",
    flex: 1,
    alignItems: "center"
  },

  vGeral: {
    backgroundColor: "white",
    width: 380,
    height: 490,
    marginTop: 15,
    borderRadius: 15,
    padding: 10,
  },

  experiencia: {
    fontWeight: "bold",
    fontSize: 21
  },

  image: {
    height: 50,
    width: 50
  },

  vTecnologias: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 3
  },

  tecnologias: {
    width: '50%',
  }
})