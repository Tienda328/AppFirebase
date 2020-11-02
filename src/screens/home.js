import React, { useContext } from 'react'
import {View, Text, TouchableOpacity, Button} from 'react-native';
import {AuthContext} from '../navigators/AuthProvider'

const Home = ({navigation}) => {
    const {user, logout} = useContext(AuthContext);
    return (
        <View style={{justifyContent: 'center', alignItems:'center', flex: 1}}>
            <Text>Welcome {user.email}</Text>
            <Text style={{ fontSize: 45, color: '#534404' }}>Home</Text>
            <TouchableOpacity style={{ alignItems: 'center',backgroundColor: '#032422' }} onPress={() => logout()} >
                <Text style={{ fontSize: 25, color: '#95B404' }} >Logout</Text>
            </TouchableOpacity>
            <Button
          title="Go to Setting"
          onPress={() => navigation.navigate('Settingscreen')}
        />
        </View>
    )
}

export default Home;