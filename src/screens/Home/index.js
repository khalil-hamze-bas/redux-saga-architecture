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
import { productSelector } from "@selector";
import { getProduct } from "../../redux/modules/products/actions";


const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  
export default function Home () {

    const dispatch = useDispatch();
    const products = useSelector(productSelector);

    useEffect(() => {
      dispatch(getProduct());
    }, [dispatch])

    console.log(products);
    const renderItem = ({ item }) => (
        <Item title={item.name} />
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