import { StyleSheet, Text, View, Image, Pressable} from 'react-native';

const ListItem = () => {

    return (
        <Pressable>
            <View>
                <View>
                    <Image/>
                    <View>
                        <Text>Nombre</Text>  
                        <Text>Tipo</Text>
                    </View>
                </View>
            </View>  
        </Pressable>
    )
}

const styles = StyleSheet.create({

});

export default ListItem