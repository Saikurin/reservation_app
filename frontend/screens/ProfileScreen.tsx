import {ScrollView, StyleSheet} from 'react-native';

import {Text, View} from '../components/Themed';
import {Button, Card, Switch, TextInput} from "react-native-paper";
import React from 'react';

export default function ProfileScreen() {

    const [isEnabled, setIsSwitchOn] = React.useState(false);

    const [name, setName] = React.useState("");
    const [nameLength, setNameLength] = React.useState("0/100");

    const [firstname, setFirstname] = React.useState("");
    const [firstnameLength, setFirstnameLength] = React.useState("0/100");

    const [email, setEmail] = React.useState("");
    const [emailLength, setEmailLength] = React.useState("0/100");

    const [poids, setPoids] = React.useState(0);
    const [taille, setTaille] = React.useState("");
    const [age, setAge] = React.useState(0);

    const [objectif, setObjectif] = React.useState("");
    const [objectifLength, setObjectifLength] = React.useState("0/200");

    const [password, setPassword] = React.useState("");
    const [passwordRepeat, setPasswordRepeat] = React.useState("");

    const changeSwitch = () => {
        if(isEnabled) {
            // Send notification
        }
        setIsSwitchOn(!isEnabled);
    }


    return (
        <ScrollView style={styles.container} contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
            <Card style={{borderWidth: 5, borderRadius: 25}}>
                <Card.Content style={{margin: 15}}>
                    <Text style={{textAlign: 'center', fontWeight: 'bold', marginBottom: 10}}>Inscription</Text>
                    <TextInput
                        mode="outlined"
                        label="Nom"
                        placeholder="Parker"
                        onChangeText={(text) => {
                            if(text.length <= 100) {
                                setNameLength(text.length + "/100")
                                setName(text)
                            }
                        }}
                        value={name}
                        right={<TextInput.Affix text={nameLength}/>}
                    />
                    <TextInput
                        style={{marginTop: 15}}
                        mode="outlined"
                        label="Prenom"
                        placeholder="Peter"
                        onChangeText={(text) => {
                            if(text.length <= 100) {
                                setFirstnameLength(text.length + "/100")
                                setFirstname(text)
                            }
                        }}
                        value={firstname}
                        right={<TextInput.Affix text={firstnameLength}/>}
                    />
                    <TextInput
                        style={{marginTop: 15}}
                        mode="outlined"
                        label="Email"
                        placeholder="tony.stark@gmail.com"
                        onChangeText={(text) => {
                            if(text.length <= 100) {
                                setEmailLength(text.length + "/100")
                                setEmail(text)
                            }
                        }}
                        value={email}
                        right={<TextInput.Affix text={emailLength}/>}
                    />
                    <TextInput
                        style={{marginTop: 15}}
                        keyboardType="numeric"
                        mode="outlined"
                        label="Poids"
                        placeholder="60 kg"
                        onChangeText={(text) => {
                            if(text.length === 0) {
                                text = "0"
                            }
                            if(RegExp("^[0-9]+$").test(text)) {
                                setPoids(parseInt(text))
                            }
                        }}
                        value={poids.toString()}
                    />
                    <TextInput
                        style={{marginTop: 15}}
                        mode="outlined"
                        label="Taille"
                        placeholder="1m80"
                        onChangeText={(text) => {
                            setTaille(text)
                        }}
                        value={taille}
                    />
                    <TextInput
                        style={{marginTop: 15}}
                        mode="outlined"
                        label="Age"
                        placeholder="18 ans"
                        onChangeText={(text) => {
                            if(text.length === 0) {
                                text = "0"
                            }
                            if(RegExp("^[0-9]+$").test(text)) {
                                setAge(parseInt(text))
                            }
                        }}
                        value={age.toString()}
                    />

                    <TextInput
                        style={{marginTop: 15}}
                        mode="outlined"
                        label="Objectifs"
                        placeholder="Perte de poids ..."

                        onChangeText={(text) => {
                            if(text.length <= 100) {
                                setObjectifLength(text.length + "/200")
                                setObjectif(text)
                            }
                        }}
                        value={objectif}
                        multiline={true}
                        right={<TextInput.Affix text={objectifLength}/>}
                    />
                    <Button icon="send" mode="contained"
                            onPress={() => console.log('Pressed')}
                            style={{marginTop: 15}}>
                        Modifier
                    </Button>

                    <TextInput
                        secureTextEntry={true}
                        style={{marginTop: 15}}
                        mode="outlined"
                        label="Ancien mot de passe"
                        placeholder="********"
                        onChangeText={(text) => {
                                setPassword(text)
                        }}
                        value={password}
                    />
                    <TextInput
                        secureTextEntry={true}
                        style={{marginTop: 15}}
                        mode="outlined"
                        label="Nouveau mot de passe"
                        placeholder="********"
                        onChangeText={(text) => {
                            setPasswordRepeat(text)
                        }}
                        value={passwordRepeat}

                    />
                    <Button icon="send" mode="contained"
                            onPress={() => console.log('Pressed')}
                            style={{marginTop: 15}}>
                        Changer de mot de passe
                    </Button>

                    <View style={{marginTop: 40, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Switch
                            value={isEnabled}
                            onValueChange={() => changeSwitch()}
                            trackColor={{false: "#767577", true: "#81b0ff"}}
                        />
                        <Text style={{alignSelf: 'center', fontSize: 20}}>Activer les notifications</Text>
                    </View>
                </Card.Content>
            </Card>

            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
        </ScrollView>

    );

}

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        marginHorizontal: 20
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
