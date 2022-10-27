import React from "react";
import { StyleSheet } from "react-native";
import { Button, Card, TextInput } from "react-native-paper";
import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../types";

export default function PasswordOublieScreen({ navigation }: RootStackScreenProps<'PasswordOublie'>) {
    return(
        <View style={styles.container}>
            <Card style={{borderWidth:5 , borderRadius:25}}>
<Card.Content style= {{margin:15}}>
<Text style={{textAlign:'center', fontWeight:'bold'}}>
      Un Email vous sera envoyez afin de reinitialiser votre mot de passe
    </Text>
      <form 
      style= {{marginTop:30 }}>
      <TextInput
      mode="outlined"
      label="Email adress "
      placeholder="Entrez votre Email "
      right={<TextInput.Affix text="/100" />}
    />

<Button icon="send" mode="contained"
onPress={() => console.log('Pressed')}
style={{marginTop:15}}>
    Envoyer
  </Button>
</form>
</Card.Content>
</Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
  });