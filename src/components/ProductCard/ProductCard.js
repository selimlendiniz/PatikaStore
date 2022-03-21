import React,{Component}from 'react';
import {Text,Image,View} from 'react-native';
import styles from './ProductCard.style';




function ProductCard({products}){

    function isStock(){
        if(products.inStock == false){
            return(
                <Text style={{
                    color:'red',
                    fontSize:20,
                    fontWeight:'bold',
                }}>STOKTA YOK</Text>
            );
        }
    }



    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: products.imgURL}} />
            <View>
                <Text style={styles.title}>{products.title}</Text>
                <Text>{products.price}</Text>
                <Text>
                    {isStock()}
                </Text>
            </View>
        </View>
    );
}

export default ProductCard;