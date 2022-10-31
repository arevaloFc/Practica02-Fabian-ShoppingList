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