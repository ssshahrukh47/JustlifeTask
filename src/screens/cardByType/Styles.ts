import { StyleSheet } from "react-native";
import colors from "../../res/themes/Colors";

const styles = StyleSheet.create({

  container: {
    flex: 1,
    margin: 20
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: colors.red,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.primaryColor,
    textAlign: 'center'
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
},
backButton: {
    marginRight: 16,
},
backButtonText: {
    color: colors.primaryColor,
    fontSize: 16,
    fontWeight:'medium',
    paddingRight:25
},
noDataText: {
  color: colors.grayColor, 
  fontSize: 18,           
  fontWeight: 'bold',     
  textAlign: 'center',      
  marginTop: 10,    
},
});

export default styles