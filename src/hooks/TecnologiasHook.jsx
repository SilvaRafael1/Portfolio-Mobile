import { useState } from "react"
import { Image } from "react-native"
import styles from "../components/Habilidades/styles"

const Tecnologias = [
  {
    id: 1,
    title: "NodeJS",
    source: <Image style={styles.image} source={require("../../assets/nodejs.png")} />
  },
  {
    id: 2,
    title: "PHP",
    source:  <Image style={styles.image} source={require("../../assets/php.png")} />
  },
  {
    id: 3,
    title: "JavaScript",
    source:  <Image style={styles.image} source={require("../../assets/javascript.png")} />
  },
  {
    id: 4,
    title: "TypeScript",
    source:  <Image style={styles.image} source={require("../../assets/typescript.png")} />
  },
  {
    id: 5,
    title: "React",
    source:  <Image style={styles.image} source={require("../../assets/react.png")} />
  },
  {
    id: 6,
    title: "GitHub",
    source:  <Image style={styles.image} source={require("../../assets/github.png")} />
  },
  {
    id: 7,
    title: "Tailwind CSS",
    source:  <Image style={styles.image} source={require("../../assets/tailwind.png")} />
  }
]

export default function TecnologiasHook() {
  const [tecnologias, setTecnologias] = useState(Tecnologias)

  return {tecnologias}
}