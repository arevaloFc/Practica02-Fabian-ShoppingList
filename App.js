import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
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
      <View style={styles.productInput}>
        <ProductInput onProductAdd={addProductHandler} product={product} setProduct={setProduct}/>
      </View>
      <ScrollView style={styles.listItem}>
        <View>
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
      <View style={styles.buttonBorrar}>
        <Button
          title="clear"
          disabled={products.length === 0 }
          onPress={removeProductHandler}
        /> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'red'
  },

  productInput: {
    marginTop: 50,
    backgroundColor: 'blue',
    width: '100%',
    height: '20%'
  },

  listItem: {
    marginTop: 25,
    backgroundColor: 'green',
    width: '100%'
  },

  buttonBorrar: {
    margin: 20,
    width: '50%',
  }

});
