module.exports = {
  preset: 'react-native',
  setupFiles: ['./jest.setup.js'], // Ensure this points to the correct file
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native)|react-navigation/)',
  ],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy', // Handle CSS modules
    '\\.(png|jpg|jpeg|gif)$': 'jest-transform-stub', // Handle image files
},
  
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
  ],
};

