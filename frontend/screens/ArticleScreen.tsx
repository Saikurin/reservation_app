import {Share, StyleSheet} from 'react-native';

import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import {useContext} from "react";
import {ArticleContext} from "../contexts/ArticleContext";
import {Card, IconButton} from "react-native-paper";


export default function ArticleScreen({ navigation }: RootStackScreenProps<'Article'>) {
  const {selectedArticle} = useContext(ArticleContext)


  const shareData = async () => {
    await Share.share({
      message: "Viens voir l'article ici #TODOLINK" // TODO: Generate link
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{selectedArticle.title}</Text>
      <Card.Cover style={styles.cover} source={{uri: selectedArticle.image}}/>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.text}>{selectedArticle.text}</Text>
      <View style={{display:'flex', flexDirection: 'row', justifyContent:'center'}}>
        <IconButton icon="share" onPress={shareData} size={40}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom:30
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  text: {
    padding: 30
  },
  cover: {
    padding: 15,
    backgroundColor: 'transparent',
    marginTop: 20
  }
});
