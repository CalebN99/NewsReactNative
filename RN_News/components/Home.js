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
                <News/>
                <Text style={styles.createdByText}>RN News created by Caleb Norris - 2021</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      padding: 0,
      height: 900,
      textAlign: "center",
      alignItems: "center"
      
    },
    createdByText: {
        color: "gray",
        fontSize: 12,
        textAlign: "center",
        marginTop: 10
        
    }
  });

export default Home;