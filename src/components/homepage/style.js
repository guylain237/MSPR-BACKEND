import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: '#green',
      padding: 20,
      margin: 10,
    },
    top: {
      flex: 0.3,
      backgroundColor: 'green',
      borderWidth: 5,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    middle: {
      flex: 0.3,
      backgroundColor: 'beige',
      borderWidth: 5,
    },
    bottom: {
      flex: 0.3,
      backgroundColor: 'pink',
      borderWidth: 5,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
  });

  