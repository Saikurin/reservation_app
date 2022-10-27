import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';

export default function InscriptionScreen({ navigation }: RootStackScreenProps<'Inscription'>) {
  return (
    <View style={styles.container}>
      <Card style={{borderWidth:5 , borderRadius:25}}>
<Card.Content style= {{margin:15}}>
      <Text style={{textAlign:'center', fontWeight:'bold'}}>Inscription</Text>
      <form 
      style= {{marginTop:30 }}>  
      <TextInput
      mode="outlined"
      label="Nom"
      placeholder="Nom "
      right={<TextInput.Affix text="/100" />}
    />
          <TextInput
          style= {{marginTop:15 }}
      mode="outlined"
      label="Prenom"
      placeholder="Prenom"
      right={<TextInput.Affix text="/100" />}
    />
              <TextInput
          style= {{marginTop:15 }}
      mode="outlined"
      label="Email"
      placeholder="Email"
      right={<TextInput.Affix text="/100" />}
    />
                  <TextInput
          style= {{marginTop:15 }}
      mode="outlined"
      label="Password"
      placeholder="Password"
      right={<TextInput.Affix text="/100" />}
    />
    

<Button icon="send" mode="contained"
onPress={() => console.log('Pressed')}
style={{marginTop:15}}>
    S'inscrire
  </Button>
</form>
</Card.Content>
</Card>

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

    </View>
  );
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
