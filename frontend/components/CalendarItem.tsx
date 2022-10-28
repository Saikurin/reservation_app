import {Card} from "react-native-paper";
import {StyleSheet} from "react-native";
import {AgendaEntry} from "react-native-calendars/src";
import React from "react";
import {EventContext} from "../contexts/EventContext";
import moment from "moment";
import {View, Text} from "./Themed";
import {FontAwesome} from "@expo/vector-icons";

export default function CalendarItem({event}: { event: AgendaEntry }) {
    const {events} = React.useContext(EventContext);

    const eventsFiltered = events.filter((e) => {
        return e.id.toString() == event.name;
    });

    const eventSelected = eventsFiltered[0];
    let timeDuration = 0;

    eventSelected.services.map(s => {
        timeDuration += s.time * s.quantity
    });
    // 60 = Min height
    // 120 is one hour
    // TimeDuration : 1h = 1
    const baseHour = moment(eventSelected.dateStart);
    let endHour = moment(eventSelected.dateStart);

    eventSelected.services.map(s => {
        endHour.add(s.time, 'hour');
    });

    const title = baseHour.format("HH:mm:ss") + " - " + endHour.format("HH:mm:ss");
    const icon = eventSelected.status == "Confirmé" ? (<FontAwesome name="check" size={24} color="green" />) : (eventSelected.status == "En attente" ? (<FontAwesome name="clock-o" size={24} color="orange" />) : (<FontAwesome name="times" size={24} color="red" />))

    return (
        <Card style={[styles.card]}>
            <View style={{display: 'flex', flexDirection:'row', justifyContent: 'space-between', margin: 15}}>
                <Text style={{fontSize: 20}}>{title}</Text>
                {icon}
            </View>
            <Card.Content>
                {eventSelected.services.map((s, k) => {
                    return (<View style={{
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: 'gray',
                        borderRadius: 5,
                        padding: 5,
                        marginBottom: 10,
                        height: 80
                    }} key={k}>
                        <Text style={{color: 'white', fontWeight: 'bold'}}>{s.name} ({s.time * 60} minutes)</Text>
                    </View>)
                })

                }
            </Card.Content>
        </Card>
    )
}

// 120: 1H
// 60: Base
const styles = StyleSheet.create({
    card: {
        margin: 20
    }
})
