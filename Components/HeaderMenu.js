import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

const HeaderMenu = ({ props }) => {

    
    const { photo } = props;

    return (
        <View style={styles.headerContainer}>
            <View style={styles.titleBox}>
                <Text style={{ fontSize: 25, color: '#ffff', fontWeight: 'bold' }}>Todos</Text>
            </View>
            <View style={styles.avatarBox}>
                <Image style={{
                    backgroundColor: '#ffff',
                    borderRadius: 25,
                    height: 45,
                    width: 45,
                    marginRight: 10
                }}
                    source={{ uri: photo }}
                >
                </Image>
            </View>
        </View>
    )
}

export default HeaderMenu;

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        backgroundColor: '#A6290F',
        height: '8%',
        justifyContent: 'center'
    },
    titleBox: {
        marginLeft: 10,
        flex: 0.5,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    avatarBox: {
        alignItems: 'flex-end',
        flex: 0.5,
        justifyContent: 'center',
    },

})