import * as React from 'react';
import { Button, Text, View } from 'react-native';

function Setting({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Detail!</Text>
        <Button
          title="Go to Setail"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    );
  }

  export default Setting;