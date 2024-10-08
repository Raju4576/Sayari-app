import React, { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const Screen1 = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: 'lightgrey',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        });
    }, [navigation]);
    const cat = [

        {
            title: 'Birthday',
            // image: require("./images/i1.jpeg")
        },
        {
            title: 'Mahadev',
            // image: require("./images/i2.jpeg")
        },
        {
            title: 'New Year',
            // image: require("./images/i3.jpeg")
        },
        {
            title: 'Break Up',
            // image: require("./images/i4.jpeg")
        },
        {
            title: 'Love',
            // image: require("./images/i5.jpeg")
        },
        {
            title: 'Attitude',
            // image: require("./images/i6.jpeg")
        },
        {
            title: 'Sad',
            // image: require("./images/i7.jpeg")
        },
        {
            title: 'Flower',
            // image: require("./images/i8.jpeg")
        },
        {
            title: 'Sorry',
            // image: require("./images/i9.jpeg")
        },
        {
            title: 'Yaari',
            // image: require("./images/i10.jpeg")
        },

    ]
    return (
        <>
            <ScrollView style={styles.container}>
                <View style={styles.col}>
                    <View style={styles.row}>

                        {

                            cat.map((item, index) => {
                                return (
                                    <View style={styles.col}>
                                        <View style={styles.set}>
                                            <TouchableOpacity onPress={() => navigation.navigate('Screen2', { itemIndex: index })} key={index}>
                                                {/* <Image source={item.image} style={styles.img}></Image> */}
                                            </TouchableOpacity>
                                            <Text style={styles.txt} onPress={() => navigation.navigate('Screen2', { itemIndex: index })} >{item.title}</Text>
                                        </View>
                                    </View>
                                )
                            })
                        }

                    </View>

                </View>

            </ScrollView>

        </>
    )
}
export default Screen1;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'darkgrey'
    },
    col: {
        flexDirection: 'column',
        padding: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        marginBottom: 10,
        flexWrap: 'wrap',

    },
    img: {
        height: 150,
        width: 150,
        margin: 0
    }
    ,
    set: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        overflow: 'hidden'
    },
    txt: {
        color: 'black',
        margin: 7,
        fontSize: 20,
    }

})