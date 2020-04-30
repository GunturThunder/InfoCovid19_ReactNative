import React, { Component } from 'react'
import { View, Text, StatusBar } from 'react-native'

class Home extends Component {
    render() {
        return (
            <View>
                <StatusBar backgroundColor="#000" barStyle="light-content" />
                <Text>Home</Text>
            </View>
        )
    }
}

export default Home