import Sobre from './src/components/Sobre/Sobre';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Entypo, AntDesign } from '@expo/vector-icons';
import Habilidades from './src/components/Habilidades/Habilidades';
import Certificados from './src/components/Certificados/Certificados';

const Tab = createBottomTabNavigator()
const HomeStack = createNativeStackNavigator()
const HabilidadesStack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name='Home' options={({}) => ({
          tabBarIcon: ({ focused }) => (
            <Entypo name="home" size={24} color={focused ? "blue" : "black"} />
          )
        })}>
          {() => (
            <HomeStack.Navigator>
              <HomeStack.Screen name='Sobre' component={Sobre} />
              <HomeStack.Screen name='Certificados' component={Certificados} />
            </HomeStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name='Experiências' options={({}) => ({
          tabBarIcon: ({ focused }) => (
            <AntDesign name="star" size={24} color={focused ? "blue" : "black"} />
          )
        })}>
          {() => (
            <HabilidadesStack.Navigator>
              <HabilidadesStack.Screen name='Experiência e Tecnologias' component={Habilidades} />
            </HabilidadesStack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
