import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PushNotification from "react-native-push-notification"
import { Button } from 'native-base';

class QuickInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        PushNotification.configure({
            onRegister: function (token) {
                console.log("TOKEN:", token);
            },
            onNotification: function (notification) {
                console.log("NOTIFICATION:", notification);
                notification.finish(PushNotificationIOS.FetchResult.NoData);
            },
            permissions: {
                alert: true,
                badge: true,
                sound: true,
            },
            popInitialNotification: true,
            requestPermissions: true,
        });
    }

    sendNotif = () => {
        PushNotification.localNotification({
            title: "My Notification Title", // (optional)
            message: "My Notification Message", // (required)
          });
    }

    render() {
        return (
            <View>
                <Text>QuickInfo</Text>
                <Button onPress={()=>this.sendNotif()} >
                    <Text>Click Here</Text></Button>
            </View>
        )
    }
}

export default QuickInfo