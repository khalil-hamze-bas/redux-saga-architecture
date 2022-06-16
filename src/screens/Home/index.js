import React, { useState, useEffect, useReducer } from "react";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
  } from "react-native";

//Redux library
import { useSelector, useDispatch } from "react-redux";
import { productSelector } from "@selectors";
import { setProduct } from "../../redux/modules/products/actions";

// const DATA = [
// {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
// },
// {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
// },
// {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
// },
// ];

const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  
export default function Home () {

    const dispatch = useDispatch();
    const products = useSelector(productSelector);

    useEffect(() => {
      dispatch(setProduct());
    })

    console.log(products);
    const renderItem = ({ item }) => (
        <Item title={item.title} />
      );
    

    return(
        <View>
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });