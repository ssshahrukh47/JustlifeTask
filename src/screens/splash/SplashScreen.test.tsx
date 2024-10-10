import React from 'react';
import { render, act } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './SplashScreen';

jest.useFakeTimers();

describe('SplashScreen', () => {
  it('navigates to CardTypesScreen after 2 seconds', async () => {
    const mockReplace = jest.fn();
    const navigation = { replace: mockReplace };

    render(
      <NavigationContainer>
        <SplashScreen navigation={navigation} />
      </NavigationContainer>
    );

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    // Check if navigation.replace was called with 'CardTypesScreen'
    expect(mockReplace).toHaveBeenCalledWith('CardTypesScreen');
  });
});
