import React from "react";
import { FlatList, Image, ListRenderItem, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import data from '../assets/data.json';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useCartStore from "../zustand/store/cartStore";


export default function TabOneScreen(): JSX.Element {
  const {addProduct, reduceProduct} = useCartStore();
  // this for tab navigation 
  const {items} = useCartStore();

  const renderItem: ListRenderItem<any> = ({item}) => (
    <View style={styles.cartItemContainer}>
      <Image style={styles.cartItemImage} source={{uri: item.image}}/>
      <View style={styles.itemContainer}>
        <Text style={styles.cartItemName}>{item.title}</Text>
        <Text>Price: ${item.price}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={{padding: 10}} onPress={() => reduceProduct(item)}>
          <Ionicons name="remove" size={20} color="#000"/>
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 10}} onPress={() => addProduct(item)}>
          <Ionicons name="add" size={20} color="#000"/>
        </TouchableOpacity>
      </View>
    </View>
  )

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.number}>
        <Text style={styles.text}>{items}</Text>
      </TouchableOpacity>
      <FlatList data={data} renderItem={renderItem}/>
    </View>
  )
}

const styles = StyleSheet.create({
  number: {
    alignSelf: 'flex-end',
    paddingRight: 20,
    paddingTop: 11,
    paddingBottom: 33,
    backgroundColor: 'cyan',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },
  container: {
    flex: 1,
  },
  cartItemContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  cartItemImage: {
    height: 50,
    width: 50,
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemContainer: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  }
})