import {StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import {styles} from './assets/styles/styles'
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Home' //Alias de la pantalla
            component={HomeScreen} //componente
            options={{ title: 'Inicio' }}
          />
          <Stack.Screen
            name='Profile' //Alias de la pantalla
            component={ProfileScreen} //componente
            options={{title:'Perfil del Usuario'}}
          />

        </Stack.Navigator>
      </NavigationContainer>
  );
}

//Generar el componente "HomeScreen"
/* const HomeScreen = ({navigation}) =>{
  return (
    <View style={styles.container}>
      {/* <Button
        title="Ir al perfil del usuario"
        onPress={() =>
          navigation.navigate('Profile', {name: 'Mateo', username: 'Gelus'})
        }
      />  
      <TouchableOpacity
        style={{borderRadius:10, backgroundColor:'blue'}}
        onPress={()=>{
          navigation.navigate('Profile',{name:'Mateo Franco',username:'Gelus '})
        }}
      >
          <Text style={{color:'white', padding:10, fontSize:24}}>Ir a Perfil del Usuario</Text>
      </TouchableOpacity>
    </View>
  );
}; */

//Generar el componente de profile Screen
/* const  ProfileScreen = ({navigation, route })=>{
  return (
    <View style={styles.container}>
      <Text styles={{color: 'white', backgroundColor: 'black' }}>Este es el perfil del usuario: {route.params.name}
      </Text>
      <Text styles={{color: 'white', backgroundColor: 'black' }}>Usuario es: {route.params.username}
      </Text>
    </View>
  )
} */

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */
