import { StyleSheet } from "react-native";
import { Button, TextInput, View } from "react-native";
import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import SelectDropdown from 'react-native-select-dropdown';
import NumericInput from 'react-native-numeric-input'
import 'react-native-get-random-values'

const ProductInput = ({onProductAdd ,product, setProduct}) => {

    const changeTextHandler = (value) => {
        setProduct((product)=>{
            return{
                ...product,
                id: uuidv4(),
                name:value
            }
        });
    }

    const tipos = ["fruit", "vegetable", "bakery", "fish", "meat"]
    const limpiarSelectDropdown = useRef();

    const changetype = (value) => {
        setProduct((product)=>{
            return{
                ...product,
                type:value
            }
        });
    }

    const changenNunberHandler = (value) => {

        setProduct((product)=>{
            return{
                ...product,
                quantity:value
            }
        });
    }

    const addProductHandler = () => {
        if (
                product.name !== '' && product.quantity !== 0 && 
                product.type !== '' && product.name !== undefined && 
                product.quantity !== undefined && product.type !== undefined &&
                product.quantity >= 1
            ) {
            onProductAdd(product);
            setProduct('')
            setProduct({...product, name:'', quantity:0 })
            limpiarSelectDropdown.current.reset()
        } else {
            alert(`Ejemplo: 
            Nombre: Manzana
            Cantidad: de 1 a 99
            Tipo: fruit`)
        }
    }

    return (
        <View style={styles.productInput}>
            <View>
                <TextInput style={styles.productName}
                    placeholder='Introduzca un producto'
                    keyboardType="text"
                    onChangeText={changeTextHandler}
                    value={product.name}
                    maxLength={40}
                />
                <SelectDropdown
                    data={tipos}
                    onSelect={changetype}
                    ref={limpiarSelectDropdown} 
                    defaultValue={product.type}
                    defaultButtonText={'wey'}
                />
            </View>
            <View>
                <NumericInput 
                    onChange={changenNunberHandler} 
                    minValue={0}
                    maxValue={99}
                    valueType={'integer'}
                    rounded={true}
                    initValue={product.quantity}
                />
                <Button
                    style={styles.addButton}
                    title="Añadir"
                    onPress={addProductHandler}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    productInput: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: "#eef4ed",
        width: '80%',
        height: 80,
        borderRadius: 5,
        padding: 10
    },
    productName: {
        flex: 4
    },
    addButton: {
        flex: 1
    }
});

// npm i react-native-get-random-values 
// npm install uuid 
// npm install react-native-select-dropdown
// npm install react-native-numeric-input --save

export default ProductInput;