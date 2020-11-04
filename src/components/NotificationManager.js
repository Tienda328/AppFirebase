import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import { Platform } from 'react-native';

class NotificationManager {
    configure = (onRegister,onOpenNotification, onNotification) => {
        PushNotification.configure({
            onRegister: function (token) {
                onRegister(token)
                console.log("[NotificationManager] onRegister TOKEN:", token);
            },
            onNotification: function (notification) {
                console.log("[NotificationManager] NOTIFICATION:", notification);

                if(Platform.OS === 'ios') {
                    if(notification.data.openedInForeground) {
                        notification.userInteraction = true
                    }
                }else{
                    notification.userInteraction = true
                }
                if(notification.userInteraction) {
                    onOpenNotification(notification)
                }else{
                    onNotification(notification)
                }

                // // process the notification

                // // (required) Called when a remote is received or opened, or local notification is opened
                // notification.finish(PushNotificationIOS.FetchResult.NoData);

                if(Platform.OS === 'ios') {
                    if (!notification.data.openedInForeground){
                        notification.finish('backgroundFetchResultNoData')
                    } 
                }else{
                    notification.finish('backgroundFetchResultNoData')
                }
            },
        })
    }

    _buildAndroidNotification =(id, title, message, data= {}, options ={}) => {
        return {
            id: id,
            autoCancel: true,
            largeiIon: options.largeIcon || "ic_launcher",
            smallicon: options.smallicon || "ic_launcher",
            bigText: message || '',
            subText: title || '',
            vibrate: options.vibrate || false,
            vibration: options.vibration || 300,
            priority: options.priority || "high",
            importance: options.importance || "high",
            data: data
        }
    }

    _buildIOSNotification =( id , title, message, data ={} , options = {}) => {
        return {
            alerAction: options.alerAction || "view",
            category: options.category || "",
            userInfo: {
                id: id,
                item: data
            }
        }
    }

    showNotification = (id, title, message, data= {}, options= {}) =>{
        PushNotification.localNotification({
            /* Android Only Properties */
            ...this._buildAndroidNotification(id, title, message, data, options),
            /* IOS Only Properties */
            ...this._buildIOSNotification(id, title, message, data, options),
            /* Android and IOS Properties */
            title: title || "",
            message: message || "",
            playSound: options.playSound || false,
            soundName: options.soundName || 'default',
            userInteraction: false //If the notification was  opened by the user from the  notification are or not
        })
    }

    cancelAllLocalNotification =() => {
        if (Platform.OS ==='ios'){
            PushNotificationIOS.removeAllDeliveredNotifications()
        }else{
            PushNotification.cancelAllLocalNotification()
        }
    }

unregister =() =>{
    PushNotification.unregister
}

}

export const notificationManager = new NotificationManager()

