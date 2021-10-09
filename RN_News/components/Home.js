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
  });

export default Home;