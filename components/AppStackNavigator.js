import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import ReceiverDetailScreen from '../screens/ReceiverDetailScreen';
import BookDonateScreen from '../screens/BookDonateScreen';

export const AppStackNavigator = createStackNavigator({
    BookDonate:{
        screen:BookDonateScreen,
        navigationOptions:{
            headerShown:false,
        }
    },
    ReceiverDetails:{
        screen:ReceiverDetailScreen,
        navigationOptions:{
            headerShown:false,
        }
    }
},
{
    initialRouteName:'BookDonate'
}
)