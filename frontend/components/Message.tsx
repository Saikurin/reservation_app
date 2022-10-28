import {Text, View} from "./Themed";
import {Image, Platform, StyleSheet} from 'react-native';
import * as React from "react";
import Layout from "../constants/Layout";

export type MessageType = {
    message: string;
    sender: string;
    created_at: string;
}

export default function Message(props: MessageType) {
    return (
        <View style={props.sender == "support" ? styles.messageSupport : (Platform.OS == "ios" || Platform.OS == "android" ? styles.messageCustomer : styles.messageCustomerDesktop)}>
            <Image style={styles.image} source={{uri: "https://emilcarlsson.se/assets/mikeross.png"}}/>
            <View style={props.sender == "support" ? (Platform.OS == "ios" || Platform.OS == "android"  ? styles.containerMessageSupport : styles.containerMessageSupportDesktop) : (Platform.OS == "ios" || Platform.OS == "android" ? styles.containerMessageCustomer : styles.containerMessageCustomerDesktop)}>
                <Text style={styles.text}>{props.message}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    messageCustomerDesktop: {
        display: "flex",
        flexDirection: "row-reverse",
        alignItems: "flex-end",
        backgroundColor: 'transparent',
        marginBottom: 20,
        marginRight: 0
    },
    messageCustomer: {
        display: "flex",
        flexDirection: "row-reverse",
        alignItems: "flex-end",
        backgroundColor: 'transparent',
        marginBottom: 20,
        marginRight: -55
    },
    messageSupport: {
        display: "flex",
        flexDirection: "row",
        marginLeft: 10,
        backgroundColor: 'transparent',
        marginBottom: 20
    },
    containerMessageSupportDesktop: {
        marginLeft: 10,
        borderRadius: 30,
        backgroundColor: "#435f7a",
        maxWidth: Layout.window.width - 80 + "px",
    },
    containerMessageCustomerDesktop: {
        marginLeft: 80,
        borderRadius: 30,
        backgroundColor: "#437a5e",
        marginRight: 10,
        maxWidth: Layout.window.width - 150 + "px",
    },
    containerMessageSupport: {
        marginLeft: 10,
        borderRadius: 30,
        backgroundColor: "#435f7a",
        maxWidth: Layout.window.width - 80,
    },
    containerMessageCustomer: {
        marginLeft: 80,
        borderRadius: 30,
        backgroundColor: "#437a5e",
        marginRight: 10,
        maxWidth: Layout.window.width - 100,
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 50,
    },
    text: {
        color: "#f5f5f5",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50
    }
});
