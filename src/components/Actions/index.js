import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

import { AntDesign} from '@expo/vector-icons'
export default function Actions(){

    return(
        <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign style={styles.icon} name="addfolder" size={26} color='#fff'/>

                </View>
                <Text style={styles.labelButton}>Entradas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign style={styles.icon} name="tagso" size={26} color='#fff'/>

                </View>
                <Text style={styles.labelButton}>Compras</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign style={styles.icon} name="creditcard" size={26} color='#fff'/>

                </View>
                <Text style={styles.labelButton}>Carteira</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign style={styles.icon} name="barcode" size={26} color='#fff'/>

                </View>
                <Text style={styles.labelButton}>Boletos</Text>
            </TouchableOpacity>


        </ScrollView>
    )

}

const styles = StyleSheet.create({
    container:{
      
        maxHeight: 84,
        marginBottom: 14,
        marginTop: 18,
        paddingEnd: 14,
        paddingStart: 14,

    },
    actionButton:{
        alignItems: 'center',
        marginRight: 32,
    },
    areaButton:{
        backgroundColor: '#ecf0f1',
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon:{
        color: "#000"
    },
    labelButton:{
        marginTop: 4,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#ccc'
    }


})
