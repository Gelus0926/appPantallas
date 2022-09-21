import {View, Text} from 'react-native'
import {styles} from '../assets/styles/styles';

const  ProfileScreen = ({navigation, route })=>{
    return (
      <View style={styles.container}>
        <Text styles={{color: 'white', backgroundColor: 'black' }}>Este es el perfil del usuario: {route.params.name}
        </Text>
        <Text styles={{color: 'white', backgroundColor: 'black' }}>Usuario es: {route.params.username}
        </Text>
      </View>
    )
}

export default ProfileScreen