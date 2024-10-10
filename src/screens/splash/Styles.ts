import { StyleSheet } from "react-native";
import colors from "../../res/themes/Colors";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.white
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    overlay: {
      position: 'absolute',
      alignItems: 'center',
    },
    appName: {
      color: colors.black,
      fontSize: 24,
      fontWeight: 'bold',
    },
  });

  export default styles