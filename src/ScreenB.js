import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ScreenB extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{fontSize:15}}>Screen B</Text>
        </View>)

    }

}

export default ScreenB;