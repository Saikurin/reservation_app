import {Platform, ScrollView, StyleSheet} from 'react-native';
import * as React from 'react';
import {UserContext} from '../contexts/UserContext';
import {RootStackScreenProps} from '../types';
import Article from "../components/Article";
import * as  articles from "../data/articles.json";
import {Title} from "react-native-paper";

export default function MainScreen({navigation}: RootStackScreenProps<'Main'>) {
    const {token} = React.useContext(UserContext);

    return (
        <ScrollView style={styles.container}>
            <Title style={styles.title}>Dernières actualités</Title>
            {
                articles.map((article, key) => {
                    return <Article article={article}/>
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
