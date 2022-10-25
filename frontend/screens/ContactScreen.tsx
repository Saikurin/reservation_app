import {RootTabScreenProps} from "../types";
import discussion from "../data/contact.json";
import {ScrollView, StyleSheet} from "react-native";
import Message from "../components/Message";
import * as React from "react";

export default function ContactScreen({}: RootTabScreenProps<'Contact'>) {
    return (
        <ScrollView style={styles.container}>
            {
                discussion.map((discussion, key) => {
                    return <Message message={discussion.message} support={discussion.from == "support"} key={key}/>
                })
            }
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        marginTop: 40,
    }
})
