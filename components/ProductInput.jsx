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
                bought: true,
                name:value.trim()
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
            <View style={styles.order}>
                <TextInput
                    style={styles.inputText}
                    placeholder='Product name'
                    keyboardType="text"
                    onChangeText={changeTextHandler}
                    value={product.name}
                    maxLength={40}
                />
                <SelectDropdown
                    style={styles.order}
                    data={tipos}
                    onSelect={changetype}
                    ref={limpiarSelectDropdown} 
                    defaultValue={product.type}
                    defaultButtonText={'Type'} 
                    buttonStyle={styles.dropdown1BtnStyle} 
                />
            </View>
            <View style={styles.order}>
                <NumericInput 
                    onChange={changenNunberHandler} 
                    minValue={0}
                    maxValue={99}
                    valueType={'integer'}
                    rounded={true}
                    initValue={product.quantity}
                    rightButtonBackgroundColor={'#a7ffe6'}
                    leftButtonBackgroundColor={'#a7ffe6'}
                />
                <View style={styles.buttonEnviar}>
                    <Button 
                        color="#3EA588"
                        title="Add"
                        onPress={addProductHandler}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    productInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "#75ccb4",
        width: '100%',
        height: '100%',
        borderRadius: 5,
        padding: 10
    },

    order: {
        width: '50%',
        height: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    inputText: {
        backgroundColor: '#fff',
        width: '100%',
        height: '40%',
        padding: 12,
        fontSize: 15,
        textAlign: 'center'
    },

    dropdown1BtnStyle: {
        width: '100%',
        height: '40%',
        backgroundColor: '#FFF',
        borderColor: '#444',
    },

    buttonEnviar: {
        width: '80%',
    }

});

// npm i react-native-get-random-values 
// npm install uuid 
// npm install react-native-select-dropdown
// npm install react-native-numeric-input --save

export default ProductInput;