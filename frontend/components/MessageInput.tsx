import {Text, View} from "./Themed";
import {Keyboard, StyleSheet} from "react-native";
import {TextInput} from "react-native-paper";
import * as React from "react";
import {useContext, useEffect} from "react";
import {ContactContext} from "../contexts/ContactContext";

export function MessageInput() {
    const [text, setText] = React.useState("");
    const [length, setLength] = React.useState("0/100");
    const [marginBottomInput, setMarginBottom] = React.useState(0);

    const {addMessage} = useContext(ContactContext);

    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", (event) => {
            setMarginBottom(event.endCoordinates.height - 75)
        });
        Keyboard.addListener("keyboardDidHide", () => {
            /*for (let i = event.endCoordinates.height - 75; i >= 0; i--) {
                setMarginBottom(i);
            }*/
            setMarginBottom(0)
        });
    }, []);


    return (
        <View style={[styles.group, {marginBottom: marginBottomInput}]}>
            <TextInput placeholder="Votre message" returnKeyType="send" style={styles.input} editable
                       maxLength={100} label="Votre message" value={text} onChangeText={text => {
                if (text.length <= 100) {
                    setLength(text.length + "/100");
                    setText(text);
                }
            }} onSubmitEditing={() => {
                addMessage({
                    message: text,
                    sender: "customer",
                    created_at: Date.now().toString()
                })
                setText("")
            }}/>
            <Text>{length}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    group: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative"
    },
    input: {
        width: "90%"
    },
})
