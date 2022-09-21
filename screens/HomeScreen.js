import {View, TouchableOpacity, Text} from 'react-native'
import {styles} from '../assets/styles/styles'

//Generar el componente "HomeScreen"
const HomeScreen = ({navigation}) =>{
    return (
      <View style={styles.container}>
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
  };

export default HomeScreen