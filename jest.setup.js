import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-gesture-handler', () => {
    const React = require('react');
    const { View } = require('react-native');

    return {
        // Mock the GestureHandler functions
        TapGestureHandler: (props) => <View {...props} />,
        PanGestureHandler: (props) => <View {...props} />,
        // Add any other handlers you may need
        Directions: {},
    };
});

module.exports = {
  process(src, filename) {
      return `module.exports = ${JSON.stringify(filename)};`;
  },
};
