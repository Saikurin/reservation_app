import {ScrollView, StyleSheet} from 'react-native';
import * as React from 'react';
import {RootStackScreenProps} from '../types';
import Article from "../components/Article";
import articles from "../data/articles.json";
import {Title} from "react-native-paper";
import {ArticleContext} from "../contexts/ArticleContext";


export default function MainScreen({navigation}: RootStackScreenProps<'Main'>) {
    const {setArticle} = React.useContext(ArticleContext);
    return (

        <ScrollView style={styles.container}>
            <Title style={styles.title}>Dernières actualités</Title>
            {
                articles.map((article, key) => {
                    return <Article article={article} click={() => {
                        setArticle(article)
                        navigation.navigate('Article')
                    }} key={key}/>
                })
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 40,
        textAlign: 'center'
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
