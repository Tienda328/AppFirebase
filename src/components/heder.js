import * as React from 'react';
import { Image, Text, TouchableOpacity, View, Platform, StyleSheet, Dimensions } from 'react-native';
const height = Dimensions.get('window').height;

function Heder({ Title, onLeft, onRight, isLeft }) {
    return (
        <View style={styles.container}>
            {isLeft ? <TouchableOpacity onPress={onLeft}>
                <Image
                    style={{ width: 25, height: 25, resizeMode: 'contain', marginLeft: 8 }}
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSjvNdCTSu6WrdTprN1uS-B1Q1tPo-yz9RbVg&usqp=CAU' }} />
            </TouchableOpacity> : <View/>}
            <Text style={{ fontSize: 30, fontWeight: '500' }} >{Title}</Text>
            <TouchableOpacity onPress={onRight}>
                <Image
                    style={{ width: 30, height: 30, resizeMode: 'contain', marginRight: 8 }}
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTphTsMxYDVLw-QEU_oLOb0CRlOjdv626DgzQ&usqp=CAU' }} />
            </TouchableOpacity>
        </View>
    );
}

export default Heder;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        height: height / 18,
        marginTop: Platform.OS ? 38 : 10,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

    }
});