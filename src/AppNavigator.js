import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ScreenA from './ScreenA';
import TabScreensNavigator from './TabScreensNavigator'

const AppNavigation = createStackNavigator({

    ScreenA: {
        screen: ScreenA,
        navigationOptions: {
            title: 'Screen A',
            // header: null,
        }
    },
    ScreenBC: {
        screen: TabScreensNavigator,
        navigationOptions: {
            header: null
        }
    },
}
);
const appStack = createAppContainer(AppNavigation);

export default appStack;
