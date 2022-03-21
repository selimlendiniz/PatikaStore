import React,{Component} from 'react';
import {StyleSheet, Dimensions} from 'react-native';



const numColumns = 2
const WİDTH = Dimensions.get('window').width;


export default StyleSheet.create({

    container:{
        backgroundColor:'#6fb8dc',
        marginBottom:10,
        padding:15,
        borderRadius:10,
        width:WİDTH / numColumns,
        marginRight:10,

    },
    inner_container:{

    },
    image:{
        height:200,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,

    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        marginTop:5,
    },
    price:{

    }
})