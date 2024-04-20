import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import ScreenB from './ScreenB';
import ScreenC from './ScreenC';
import { Text, TouchableOpacity } from 'react-native';
const tabs = createMaterialTopTabNavigator(
    {
        ScreenB: {
            screen: ScreenB,
            navigationOptions: {
                tabBarLabel: 'Screen B',
            },
        },
        ScreenC: {
            screen: ScreenC,
            navigationOptions: {
                tabBarLabel: 'Screen C',
            },
        },
    },

    {
        tabBarOptions: {
            activeTintColor: 'red',
            inactiveTintColor: 'green',
        },
    },
    {
        navigationOptions: {
            tabBarOnPress: ({ navigation, defaultHandler }) => {
                defaultHandler();
            }
        }
    },
    {
        lazy: false
    }
);

const stack = createStackNavigator({
    tab: {
        screen: tabs,

        navigationOptions: props => ({
            title: 'MY Screens',
            headerStyle: {
                backgroundColor: 'white',
                borderBottomWidth: 0.5,

            },
            headerLeft: (
                <TouchableOpacity onPress={() => {
                    {
                        props.navigation.pop();
                        props.navigation.goBack();

                    }
                }}>
                    <Text style={{ fontSize: 20, padding: 8 }}>Back</Text>
                </TouchableOpacity>
            ),
        }),
    },


});

export default createAppContainer(stack);