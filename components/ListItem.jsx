import { StyleSheet, Text, View, Image, Pressable} from 'react-native';
import { useState } from 'react';

const ListItem = ({productName}) => {

    let cambioImagenTipo = ''

    switch (productName.type) {
        case "fruit":
                cambioImagenTipo = require('../assets/manzana.jpg')
            break;
        case "vegetable":
                cambioImagenTipo = require('../assets/lechuga.jpg')
            break;
        case "bakery":
                cambioImagenTipo = require('../assets/pan.jpg')
            break;
        case "fish":
                cambioImagenTipo = require('../assets/pescado.jpg')
            break;
        case "meat":
                cambioImagenTipo = require('../assets/carne.jpg')
            break;
        default:
            break;
    }

    const [color, setColor] = useState('#4EC8A5');

    return (
        <Pressable style={styles.listItem} onPress={() => setColor(color === '#849993' ? '#4EC8A5' : '#849993') }>
            <View  style={{backgroundColor: color,width:'100%', marginBottom: 10}} >
                <View style={styles.productCard} >
                    <Image style={styles.productImage} source={cambioImagenTipo} />
                    <View style={styles.text}>
                        <Text style={styles.productName}>{productName.quantity} x </Text> 
                        <Text style={styles.productName}>{productName.name}</Text>
                    </View>
                </View>
            </View>  
        </Pressable>
    )
}

const styles = StyleSheet.create({
    listItem: {
        width: '88%',
        justifyContent: 'center',
    },

    productImage: {
        width: 100,
        height: 100,
        margin: 5
    },

    productCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    text: {
        flex: 5,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
    }
});

export default ListItem