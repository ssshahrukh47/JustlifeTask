import { StyleSheet } from "react-native";
import colors from "../../res/themes/Colors";

const styles = StyleSheet.create({

  container: {
    flex: 1,
    margin: 20,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.primaryColor,
    marginBottom: 16,
    textAlign: 'center'
  },
  searchInput: {
    height: 50,
    borderColor: colors.primaryColor,
    borderWidth: 2,
    marginBottom: 16,
    paddingHorizontal: 15,
    borderRadius: 25,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  errorText: {
    color: colors.red,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  }
});

export default styles