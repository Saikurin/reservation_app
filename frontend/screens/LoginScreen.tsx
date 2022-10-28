import {StyleSheet} from 'react-native';
import {TextInput, Button, Card} from 'react-native-paper';
import {View} from '../components/Themed';
import {RootStackScreenProps} from '../types';
import {Link} from "@react-navigation/native";

export default function LoginScreen({}: RootStackScreenProps<'Login'>) {
    return (
        <View style={styles.container}>
            <Card style={{borderRadius: 5, marginTop: 30}}>
                <Card.Content style={{margin: 15}}>
                    <TextInput
                        mode="outlined"
                        label="Email adress "
                        placeholder="Email "
                        right={<TextInput.Affix text="/100"/>}
                    />
                    <TextInput
                        style={{marginTop: 15}}
                        mode="outlined"
                        label="Password"
                        placeholder="Password"
                        right={<TextInput.Affix text="/100"/>}
                    />

                    <Button icon="send" mode="contained"
                            onPress={() => console.log('Pressed')}
                            style={{marginTop: 15}}>
                        Se connecter
                    </Button>
                    <Link to={{screen: 'Inscription'}} style={{marginTop: 30, textAlign: 'center', fontWeight: 'bold'}}>pas
                        de compte, creer un compte</Link>
                    <Link to={{screen: 'PasswordOublie'}}
                          style={{marginTop: 15, marginBottom: 15, textAlign: 'center', fontWeight: 'bold'}}>Mot de
                        passe oublie ?</Link>
                </Card.Content>
            </Card>
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
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
