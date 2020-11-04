import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { notificationManager } from "../components/NotificationManager";

export default class Notification extends Component {
    constructor(props){
        super(props)
        this.localNotify =null
    }

    componentDidMount(){
        this.localNotify =notificationManager;
        this.localNotify.configure(this.onRegister,this.onOpenNotification, this.onNotification)
    }

    onRegister(token) {
        console.log("[Notification] Registered:", token)
    }

    onOpenNotification(notifi) {
        console.log("[Notification] onOpenNotification:", notifi)
        alert('Open Notification')
    }

    onNotification(notifi) {
        console.log("[Notification] Notifition:", notifi)
    }

    onPressSend =() =>{
        const options ={
            soundName: 'test.mp3',//'default',
            playSound: true,
            vibrate: true
        }

        this.localNotify.showNotification(
            1, 
            "App firebase",
            "Local Notification",
            {},
            options
        )
    }
    onCancel= () =>{
        this.localNotify.cancelAllLocalNotification()
    }

    render() {
        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.button}
                onPress={this.onPressSend}>
                    <Text>Send notification</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                onPress={this.onCancel}>
                    <Text>Canel notification</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    },
    button:{
        alignItems:'center',
        backgroundColor:'#dddddd',
        padding: 10,
        width: 200,
        marginTop: 10
    }
})