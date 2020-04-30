import React, { Component } from 'react'
import { View, Text, StatusBar } from 'react-native'
import QuickInfo from '../quickInfo/QuickInfo'

class Home extends Component {
    render() {
        return (
            <View>
                <StatusBar backgroundColor="#000" barStyle="light-content" />
                <QuickInfo />
            </View>
        )
    }
}

export default Home