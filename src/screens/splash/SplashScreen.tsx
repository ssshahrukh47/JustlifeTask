import React, { useEffect } from 'react';
import { View, Image, StatusBar, Text } from 'react-native';
import Strings from '../../res/strings/Strings';
import styles from './Styles';

const SplashScreen: React.FC = ({ navigation }: any) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation?.replace('CardTypesScreen');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor={'transparent'}
      />
      <Image
        source={require('../../res/images/background.jpg')}
        style={styles.image}
        testID="splash-screen-image"
      />
      <View style={styles.overlay}>
        <Text style={styles.appName}>{Strings.JUST_LIFE}</Text>
      </View>
    </View>
  );
};

export default SplashScreen;
