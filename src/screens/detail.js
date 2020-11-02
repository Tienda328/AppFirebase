import * as React from 'react';
import { Button, Text, View } from 'react-native';

function Detail({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Detail!</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Settingscreen')}
        />
      </View>
    );
  }

  export default Detail;