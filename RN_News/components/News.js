import React, { Component } from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View, Image } from 'react-native';


const url = "https://newsapi.org/v2/everything?q=keyword&apiKey=f2720b3bc6744811933d0844a65d9650"


class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            items: [],
            error: false
        };
      }

    componentDidMount() {
        console.log("Mounted")
        fetch( url )
            .then(res => res.json())
            .then(json => {
    
              this.setState({
                isLoaded: true,
                items: json,
                
              });
              
            })

            setTimeout(() => {this.setState({isLoaded: true})}, 2000)
    }

    render() {
        console.log(this.state.items)

        if (this.state.error) {
            return <Text>There was an error loading content</Text>
        }
        else if (!this.state.isLoaded) { 
            return <Text onPress={() => {
                console.log(this.state.items)
            }} style={styles.loading}> Loading... </Text>
        }
        else if (this.state.isLoaded) {
            return (
                <View style={styles.container}>
                    
                    {this.state.items.articles.map(article => {
                        let imgURL = `${article.urlToImage}`
                           return ( 
                                <View style={styles.newsContainer}>
                                    <Image source={require(imgURL)} />
                                    <View style={styles.newsImage}></View>
                                    <Text style={styles.newsTitle}>{article.title}</Text>
                               </View>
                        )
                       })}
                    
                    
                </View>
            )
        }
       
    }
}

const styles = StyleSheet.create({
    container: {
       alignItems: "center",
    },
    loading: {
        textAlign: "center",
        fontSize: 20,
        color: "gray",
        marginTop: 20
    },
    newsContainer: {
        marginTop: 20
    },
    newsImage: {
        width: 325,
        height: 175,
        borderWidth: 5,
        borderColor: "black",
        alignSelf: "center"
    },
    newsTitle: {
        color: "black",
        fontWeight: "bold",
        fontSize: 14,
        textAlign: "center",
        padding: 5,
        paddingTop: 10
    }
  });

export default News;