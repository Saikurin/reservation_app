import {Platform, ScrollView, StyleSheet} from 'react-native';

import {Text, View} from '../components/Themed';
import {Button, Card, Switch, TextInput} from "react-native-paper";
import React, {useContext, useEffect, useRef} from 'react';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import {DeviceContext} from "../contexts/DeviceContext";
import {UserContext} from "../contexts/UserContext";

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});

export default function ProfileScreen() {
    const notificationListener = useRef();
    const responseListener = useRef();

    const {notificationAuthorized, changeAuthorisation} = useContext(DeviceContext);
    const {user} = useContext(UserContext);

    useEffect(() => {
        registerForPushNotificationsAsync();

        // @ts-ignore
        notificationListener.current = Notifications.addNotificationReceivedListener(() => {});

        // @ts-ignore
        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
            console.log(response);
        });

        return () => {
            // @ts-ignore
            Notifications.removeNotificationSubscription(notificationListener.current);
            // @ts-ignore
            Notifications.removeNotificationSubscription(responseListener.current);
        };
    }, []);

    const [name, setName] = React.useState(user.nom);
    const [nameLength, setNameLength] = React.useState(user.nom.length + "/100");

    const [firstname, setFirstname] = React.useState(user.prenom);
    const [firstnameLength, setFirstnameLength] = React.useState(user.prenom.length + "/100");

    const [email, setEmail] = React.useState(user.email);
    const [emailLength, setEmailLength] = React.useState(user.email.length + "/100");

    const [poids, setPoids] = React.useState(user.poids);
    const [taille, setTaille] = React.useState(user.taille);
    const [age, setAge] = React.useState(0);

    const [objectif, setObjectif] = React.useState(user.objectif);
    const [objectifLength, setObjectifLength] = React.useState(user.objectif.length + "/200");

    const [password, setPassword] = React.useState("");
    const [passwordRepeat, setPasswordRepeat] = React.useState("");

    const changeSwitch = () => {
        changeAuthorisation();
        if(!notificationAuthorized) {
            schedulePushNotification("Vous avez autorisé les notifications", 0);
        }
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
                            value={notificationAuthorized}
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


async function schedulePushNotification(text: string, waitInSecond: number) {
    await Notifications.scheduleNotificationAsync({
        content: {
            title: "MyCoach 💪",
            body: text,
            data: {},
        },
        trigger: { seconds: waitInSecond +1 },
    });
}

async function registerForPushNotificationsAsync() {
    let token;

    if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        });
    }

    if (Device.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
        }
        token = (await Notifications.getExpoPushTokenAsync()).data;
        console.log(token);
    } else {
        alert('Must use physical device for Push Notifications');
    }

    return token;
}
