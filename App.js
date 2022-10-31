import { ScrollView, StyleSheet, Text, View } from 'react-native';
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

  const removeProductHandler = () => {
    setProducts(() => []);
  }

  return (
    <View style={styles.container}>
      <ProductInput onProductAdd={addProductHandler} product={product} setProduct={setProduct}/>
      <ScrollView style={styles.productScroll}>
        <View style={styles.productList}>
          { 
            products.length === 0 
              ? <Text>Aún no hay productos</Text> 
              : products.map((product, idx) => (
                
                <ListItem 
                  key={idx+product} 
                  productName={product}
                />
              ))
          }
        </View>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 50,
    backgroundColor: '#fff'
  },

  productList: {
    marginTop: 10,
    flex: 4
  },

});
