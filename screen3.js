import React, { useState, useLayoutEffect } from "react";
import { StyleSheet, Text, View, Pressable, Alert } from "react-native";
import Clipboard from '@react-native-clipboard/clipboard';

const Screen3 = ({ route, navigation }) => {
    const { sayariIndex, itemIndex } = route.params;

    const [currentSayariIndex, setCurrentSayariIndex] = useState(sayariIndex);
    const [currentColorIndex, setCurrentColorIndex] = useState(0);
    const [copyText,setcopyText]=useState('');

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: 'yellow'
            },
            headerTintColor: 'red',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        });
    }, [navigation]);

    
    const sayaris = [
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
    ];

    
    const colors = ['green', 'black', 'blue', 'grey'];

    const onNextSayari = () => {
        const nextIndex = currentSayariIndex + 1;
        if (nextIndex < sayaris[itemIndex].length - 1) {
            setCurrentSayariIndex(nextIndex);
        } else {
            setCurrentSayariIndex(0); 
        }
    };

    const onPrevSayari = () => {
        const prevIndex = currentSayariIndex - 1;
        if (prevIndex >= 0) {
            setCurrentSayariIndex(prevIndex);
        } else {
            setCurrentSayariIndex(sayaris[itemIndex].length - 1); 
        }
    };

    const changeBg = () => {
        const nextColorIndex = currentColorIndex + 1
        if (nextColorIndex < colors[currentColorIndex].length) {
            setCurrentColorIndex(nextColorIndex);

        } else {
            setCurrentColorIndex(0)
        }
    };
    const onCopyText=()=>{
        Clipboard.setString(sayaris[itemIndex][currentSayariIndex])
        Alert.alert('text copied')
    }

    return (
        <Pressable
            style={[styles.container, { backgroundColor: colors[currentColorIndex] }]} // Dynamic background color
            onPress={changeBg}
        >
            <Text style={styles.txt}>{sayaris[itemIndex][currentSayariIndex]}</Text>
            <View style={styles.row}>
                <Pressable style={styles.btn} onPress={onPrevSayari}>
                    <Text style={styles.txt1}>Prev.</Text>
                </Pressable>
                <Pressable style={styles.btn} onPress={onNextSayari} >
                    <Text style={styles.txt1}>Next</Text>
                </Pressable>
            </View>
            <View style={styles.row1}>
                <Pressable style={styles.btn} onPress={onCopyText}>
                    <Text style={styles.txt1}>Copy</Text>
                </Pressable>
            </View>
        </Pressable>
    );
};

export default Screen3;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txt: {
        fontSize: 40,
        color: 'red',
        textAlign: 'center',
        marginBottom: 20
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginTop: 100
    },
    row1:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:20,
    },
    btn: {
        backgroundColor: 'orange',
        padding: 15,
        borderRadius: 10
    },
    txt1: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    }
});
