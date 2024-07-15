import Sobre from './src/components/Sobre/Sobre';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Entypo, AntDesign } from '@expo/vector-icons';
import Habilidades from './src/components/Habilidades/Habilidades';
import Certificados from './src/components/Certificados/Certificados';
import Splash from './src/components/Splash/Splash'
import Login from './src/components/Login/Login';
import SignOut from './src/components/Login/SignOut';
import { useReducer, useEffect, useMemo } from 'react';
import AuthContext from "./src/context/Auth"
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator()
const HomeStack = createNativeStackNavigator()
const HabilidadesStack = createNativeStackNavigator()
const LoginStack = createNativeStackNavigator()

export default function App() {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch(action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          }
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null
    }
  );

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem('@storage_Key')
      } catch (error) {
        console.log(error);
      }
      dispatch({ type: 'RESTORE_TOKEN', token: userToken })
    };

    bootstrapAsync()
  }, [])

  const authContext = useMemo(
    () => ({
      signIn: async (data) => {
        let myToken = 'dump'
        await AsyncStorage.setItem('@storage_Key', myToken)
        dispatch({ type: 'SIGN_IN', token: myToken })
      },
      signOut: async () => {
        await AsyncStorage.clear()
        dispatch({ type: 'SIGN_OUT' })
      },
      signUp: async (data) => {
        dispatch({ type: 'SIGN_IN', token: 'dummy2' })
      },
    }), []
  )

  if (state.isLoading) {
    return <Splash />;
  }

  return (
    <AuthContext.Provider value={authContext}>
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
          <Tab.Screen name='Conta' options={({}) => ({
            tabBarIcon: ({ focused }) => (
              <Entypo name="login" size={24} color={focused ? "blue" : "black"} />
            )
          })}>
            {() => (
              <LoginStack.Navigator>
                {state.userToken == null ? (
                  <LoginStack.Screen name='Entrar' component={Login} />
                ) : (
                  <LoginStack.Screen name='Sair' component={SignOut} />
                )}
              </LoginStack.Navigator>
            )}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
