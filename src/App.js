import React from 'react';
import {SafeAreaView,StyleSheet,View,Text,FlatList,TextInput} from 'react-native';
import ProductCard from './components/ProductCard';
import product_data from './product_Info.json';

const numColumns = 2

function App(){

    const renderProduct = ({item}) => <ProductCard products={item} />;

    return(
        <SafeAreaView>
            <Text style={styles.header}>PatikaStore</Text>
            <TextInput
                style={styles.input}
                placeholder="Ara.."
                keyboardType="numeric"
            />
            <FlatList
                data={product_data}
                renderItem={renderProduct}
                numColumns={numColumns}

                
            />
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container:{
    },
    header:{
        fontSize:50,
        fontWeight:'bold',
        fontStyle:'italic',
        color:'purple'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:10,
        backgroundColor:"#6fb8dc",
        
    },
})

export default App;