import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ScreenA extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text onPress={() => this.props.navigation.navigate("ScreenBC")} style={{ fontSize: 15 }}>Click here</Text>
        </View>)

    }

}

export default ScreenA;