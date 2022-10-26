import {RootTabScreenProps} from "../types";
import {ScrollView} from "react-native";
import Message from "../components/Message";
import * as React from "react";
import {MessageInput} from "../components/MessageInput";
import {View} from "../components/Themed";
import {ContactContext} from "../contexts/ContactContext";

export default function ContactScreen({}: RootTabScreenProps<'Contact'>) {
    const {messages} = React.useContext(ContactContext);
    return (
        <View style={{flex: 1, marginTop: 15}}>
            <ScrollView contentContainerStyle={{ flex:1}} >
                {
                    messages.map((discussion, key) => {
                        return <Message message={discussion.message} created_at={discussion.created_at} sender={discussion.sender} key={key}/>
                    })
                }
            </ScrollView>
            <MessageInput></MessageInput>
        </View>
    )
}
