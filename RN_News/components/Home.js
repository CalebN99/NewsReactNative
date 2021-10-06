import React, { Component } from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View, ScrollView} from 'react-native';
import News from "./News"


class Home extends Component {
    state = {
        loaded: false
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleBanner}>
                    <Text style={styles.bannerText}>RN News</Text>
                </View>
                <ScrollView>
                    <News/>
                    <Text style={styles.createdByText}>RN News created by Caleb Norris - 2021</Text>
                </ScrollView>
               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      padding: 0,
      height: 900,
      textAlign: "center",
      
    },
    titleBanner: {
        height: 100,
        paddingTop: 5,
        backgroundColor: "black",
        alignItems: "center"
    },
    bannerText: {
        color: "white",
        marginTop: 50,
        fontSize: 28,
        fontWeight: "bold"
    },
    createdByText: {
        color: "gray",
        fontSize: 12,
        textAlign: "center",
        marginTop: 10
        
    }
  });

export default Home;