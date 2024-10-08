
import React, { useLayoutEffect } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
const Screen2 = ({ route,navigation }) => {
   // var index=1
    const { itemIndex } = route.params;
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerStyle:{
                backgroundColor:'grey',
            },
            headerTintColor:'white',
            headerTitleStyle:{
              fontWeight:'bold'
            }
        })
    },[navigation]);

    const arr = [
        [
            "This is Birthday sayari 1",
            "This is Birthday sayari 2",
            "This is Birthday sayari 3",
            "This is Birthday sayari 4",
            "This is Birthday sayari 5",
        ],
        [
            "This is Mahadev sayari 1",
            "This is Mahadev sayari 2",
            "This is Mahadev sayari 3",
            "This is Mahadev sayari 4",
            "This is Mahadev sayari 5",

        ],
        [
            "This is New Year sayari 1",
            "This is New Year sayari 2",
            "This is New Year sayari 3",
            "This is New Year sayari 4",
            "This is New Year sayari 5",

        ],
        [
            "This is Break Up sayari 1",
            "This is Break Up sayari 2",
            "This is Break Up sayari 3",
            "This is Break Up sayari 4",
            "This is Break Up sayari 5",

        ],
        [
            "This is Love sayari 1",
            "This is Love sayari 2",
            "This is Love sayari 3",
            "This is Love sayari 4",
            "This is Love sayari 5",

        ],
        [
            "This is Attitute sayari 1",
            "This is Attitute sayari 2",
            "This is Attitute sayari 3",
            "This is Attitute sayari 4",
            "This is Attitute sayari 5",

        ],
        [
            "This is Sad sayari 1",
            "This is Sad sayari 2",
            "This is Sad sayari 3",
            "This is Sad sayari 4",
            "This is Sad sayari 5",

        ],
        [
            "This is Flower sayari 1",
            "This is Flower sayari 2",
            "This is Flower sayari 3",
            "This is Flower sayari 4",
            "This is Flower sayari 5",

        ],
        [
            "This is Sorry sayari 1",
            "This is Sorry sayari 2",
            "This is Sorry sayari 3",
            "This is Sorry sayari 4",
            "This is Sorry sayari 5",

        ],
        [
            "This is Yaari sayari 1",
            "This is Yaari sayari 2",
            "This is Yaari sayari 3",
            "This is Yaari sayari 4",
            "This is Yaari sayari 5",

        ],
        
    ]
    

    return (
        <>

            <ScrollView style={styles.container}>
                <View style={styles.col}>
                    {
                        arr[itemIndex].map((item, index) => {
                            return (
                                <Pressable onPress={() => navigation.navigate('Screen3',{itemIndex: itemIndex, sayariIndex: index})}>
                                    <View style={styles.element} >
                                        <Text style={styles.txt}>{item}</Text>
                                    </View>
                                </Pressable>
                            )

                        })

                    }
                </View>
            </ScrollView>
        </>
    )
}
export default Screen2;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
    },
    col: {
        flexDirection: 'column',
        alignItems: 'center'
    }
    ,
    element: {
        height: 70,
        width: 350,
        // textAlign:'center',
        backgroundColor: 'black',
        margin: 5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txt: {
        color: 'white',
        fontSize: 30,
    }
})