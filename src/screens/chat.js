import * as React from 'react';
import { Button, Text, View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Herder from '../components/heder'

const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "First Item",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Second Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
    },
];

const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <Text style={styles.title}>{item}</Text>
    </TouchableOpacity>
);

function Chat({ navigation }) {

    const renderItem = ({ item }) => (
        <Item item={item.title} />
      );
    return (
        <View style={{ flex: 1 }} >
            <Herder Title="Chat" />
            <View>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>

    );
}

export default Chat;

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      borderRadius:5,
      marginHorizontal: 16,
      shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    title: {
      fontSize: 32,
    },
  });