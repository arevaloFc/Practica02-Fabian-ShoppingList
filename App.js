import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import ListItem from './components/ListItem';
import ProductInput from './components/ProductInput';

export default function App() {

  const [ products, setProducts ] = useState([])

  const [ product, setProduct ] = useState({
    id: '',
    name: '',
    quantity: 0,
    bought: false,
    type: ''
  });

  const addProductHandler = (productName) => {
    setProducts(() => [productName,...products]);
    console.log(productName)
  }

  return (
    <View style={styles.container}>
      <ProductInput onProductAdd={addProductHandler} product={product} setProduct={setProduct}/>
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
