import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { notificationManager } from '../components/notificationManager';

export default class Notification extends Component {
  constructor(props) {
    super(props)
    this.localNotify = null
  }

  componentDidMount() {
    this.localNotify =notificationManager
    this.localNotify.configure()
  }

  onPressSendNotification= () =>{
    this.localNotify.showNotification(
      1, 
      "Chao Buoi trua",
      "Local Notication",
      {}, //data
      {} //options
      
    )

  }

  render() {
    return (
      <View style={Styles.container} >
        <TouchableOpacity style={Styles.button} onPress={this.onPressSendNotification}>
          <Text>Send notification</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.button} >
          <Text>Canel notification</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    alignItems: 'center',
    backgroundColor: "#dddddd",
    padding: 10,
    width: 200,
    marginTop: 10
  }
})