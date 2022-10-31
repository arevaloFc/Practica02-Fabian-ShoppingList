import { StyleSheet, Text, View, Image, Pressable} from 'react-native';

const ListItem = ({productName}) => {

    let cambioImagenTipo = ''

    switch (productName.type) {
        case "fruit":
                cambioImagenTipo = require('../assets/splash.png')
            break;
        case "fish":
                cambioImagenTipo = require('../assets/icon.png')
            break;
        default:
            break;
    }

    return (
        <Pressable style={styles.listItem}>
            <View  style={{backgroundColor: 'red',width:'100%', marginBottom: 10}} >
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
    productImage: {
        width: 100,
        height: 100
    },
});

export default ListItem