import { StyleSheet, Text, View } from 'react-native';
import ListItem from './components/ListItem';
import ProductInput from './components/ProductInput';

export default function App() {
  return (
    <View style={styles.container}>
      <ProductInput/>
      <ListItem/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 30,
    backgroundColor: '#fff'
  },

  productList: {
    flex: 4
  },

});
