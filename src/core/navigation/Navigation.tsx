import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { navigationRef } from './NavigationServices';
import AppNavigator from './stacks/AppStack';

const ApplicationNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
