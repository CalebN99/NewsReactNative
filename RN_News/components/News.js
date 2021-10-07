import React, { Component } from 'react';
import {StyleSheet, Text, TextInput, View, Image, ImageBackground, Linking, ScrollView} from 'react-native';
import A from 'react-native-a'



const url1 = "https://newsapi.org/v2/everything?q="
const url2 = "&apiKey=f2720b3bc6744811933d0844a65d9650"


class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            items: [],
            error: false,
            search: "everything"
        };
      }

    componentDidMount() {
        console.log("Mounted")
        fetch( url1 + this.state.search + url2 )
            .then(res => res.json())
            .then(json => {
    
              this.setState({
                isLoaded: true,
                items: json,
                
              });
              
            })

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
                    <View style={styles.titleBanner}>
                        <Text style={styles.bannerText}>RN News</Text>
                        <TextInput placeholder="Search..." style={styles.searchBar}
                         onChangeText={(text) => this.setState({search: text})}
                          value={this.state.search}/>
                    </View>
                    <ScrollView> 
                        {this.state.items.articles.map(article => {
                            const image = { uri: article.urlToImage};
                            const url = { uri: article.url};

                        return ( 
                            <A href={article.url}>
                                <View style={styles.newsContainer} onPress={() => Linking.openURL(url)}>
                                    <ImageBackground source={image} style={styles.newsImage}/>
                                    <Text style={styles.newsTitle}>{article.title}</Text>
                                </View>
                            </A>
                        )})}
                    </ScrollView>   
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
        marginTop: 20,
        alignItems: "center",
        width: 325
    },
    searchBar: {
       backgroundColor: "white",
       width: 175,
       marginTop: 15,
       fontSize: 15
    },
    newsImage: {
        width: 325,
        height: 175,
        alignSelf: "center"
    },
    newsTitle: {
        color: "black",
        fontWeight: "bold",
        fontSize: 14,
        textAlign: "center",
        padding: 5,
        paddingTop: 10
    },
    titleBanner: {
        height: 130,
        paddingTop: 5,
        backgroundColor: "black",
        alignItems: "center",
        width: 450,
        marginBottom: 20
    },
    bannerText: {
        color: "white",
        marginTop: 50,
        fontSize: 28,
        fontWeight: "bold"
    },
  });

export default News;