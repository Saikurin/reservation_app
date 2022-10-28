import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import {Card} from 'react-native-paper';

export default function InscriptionScreen({ navigation }: RootStackScreenProps<'Inscription'>) {
  return (
      <View style={styles.container}>
        <Card style={{borderRadius: 5,marginTop: 30}}>
          <Card.Content style= {{margin:15}}>
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
          </Card.Content>
        </Card>

        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
