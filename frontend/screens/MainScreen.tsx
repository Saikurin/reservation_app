import {ScrollView, StyleSheet, View} from 'react-native';
import * as React from 'react';
import {RootStackScreenProps} from '../types';
import Article from "../components/Article";
import articles from "../data/articles.json";
import {IconButton, Title} from "react-native-paper";
import {ArticleContext} from "../contexts/ArticleContext";
import {UserContext} from "../contexts/UserContext";


export default function MainScreen({navigation}: RootStackScreenProps<'Main'>) {
    const {setArticle} = React.useContext(ArticleContext);
    const {token} = React.useContext(UserContext);

    return (
        <View style={{flex: 1}}>
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
            {
                (!token) ?
                    (<View style={{borderWidth: 1, position: 'absolute', bottom: 40, right: 40, alignSelf: 'flex-end', backgroundColor: '#000', borderRadius: 50}}>
                        <IconButton onPress={() => navigation.navigate('Login')} icon="login" size={25} color="#FFF"/>
                    </View>) : (<View/>)
            }

        </View>
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
