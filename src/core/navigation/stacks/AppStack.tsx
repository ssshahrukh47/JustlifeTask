import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../../../screens/splash/SplashScreen';
import CardTypesScreen from '../../../screens/cardTypes/CardTypesScreen';
import CardByTypeScreen from '../../../screens/cardByType/CardByTypeScreen';

type AppNavigatorProps = {};

// Create the stack navigator
const AppStack = createNativeStackNavigator();

const AppNavigator: FC<AppNavigatorProps> = () => {
    return (
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
            <AppStack.Screen component={SplashScreen} name="SplashScreen" />
            <AppStack.Screen component={CardTypesScreen} name="CardTypesScreen" />
            <AppStack.Screen component={CardByTypeScreen} name="CardByTypeScreen" />
        </AppStack.Navigator>
    );
};

export default AppNavigator;
