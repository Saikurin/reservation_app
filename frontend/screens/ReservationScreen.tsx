import {RootTabScreenProps} from "../types";
import {View} from "../components/Themed";
import {Button, StyleSheet} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DropDownPicker from 'react-native-dropdown-picker';
import {IconButton, Paragraph, Title} from "react-native-paper";
import {useState} from "react";
import moment from "moment";
import {EventCalendarService} from "../types/EventCalendar";

export function ReservationScreen({navigation}: RootTabScreenProps<'Reservation'>) {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [setDate] = useState(new Date());
    const [textRdv, setTextRdv] = useState("");
    const [textRdvHour, setTextRdvHour] = useState("");
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState([]);
    const [marginTopDateTimePicker, setMarginTopDateTimePicker] = useState(30);
    const [items, setItems] = useState([
        {label: 'Cours collectif', value: 'Cours collectif'},
        {label: 'Prise de poids', value: 'Prise de poids'},
        {label: 'Perte de poids', value: 'Perte de poids'}
    ]);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date: Date) => {
        setDate(date)
        let dateMoment = moment(date);
        setTextRdv("Vous avez choisi de prendre rendez-vous le");
        setTextRdvHour(dateMoment.format("D/MM/YYYY") + " à " + dateMoment.format('HH:mm'));
        hideDatePicker();
    };

    DropDownPicker.addTranslation("FR", {
        PLACEHOLDER: "Sélectionnez un élément",
        SEARCH_PLACEHOLDER: "Tapez quelque chose...",
        SELECTED_ITEMS_COUNT_TEXT: "{count} éléments ont été sélectionnés", // See below for advanced options
        NOTHING_TO_SHOW: "Il n'y a rien à montrer!"
    });


    function takeRdv() {
        //let events: EventCalendarService[] = []
        value.map(v => {
            events.push({
                name: v,
                quantity: 1,
                time: 1
            })
        })
        /*addEvent({
            id:Math.floor(Math.random() * (100 - 1 + 1) + 1), dateStart: moment(date).format("YYYY-MM-D HH:mm:00"), services: events, status: "En attente"
        }).then(
            () => {
                navigation.navigate("Calendar")
            }
        )*/
        navigation.navigate("Calendar");
    }

    return (
        <View style={styles.container}>
            <Title style={{margin: 5, marginTop: 30, textAlign: 'center'}}>Quelles prestations souhaite-vous ?</Title>
            <View style={{paddingHorizontal: 40}}>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    multiple={true}
                    min={1}
                    onOpen={() => setMarginTopDateTimePicker(marginTopDateTimePicker + 95)}
                    onClose={() => setMarginTopDateTimePicker(30)}
                    language="FR"/>
            </View>
            <View style={{marginTop: marginTopDateTimePicker}}>
                <Title style={{margin: 5, marginTop: marginTopDateTimePicker, textAlign: 'center'}}>Quand souhaitez-vous
                    prendre rendez-vous ?</Title>
                <IconButton icon="calendar-clock" size={60} color="#0073A1" style={{alignSelf: 'center'}}
                            onPress={showDatePicker}/>
                <Paragraph style={{
                    paddingTop: 10,
                    paddingHorizontal: 10,
                    fontSize: 16,
                    textAlign: 'center'
                }}>{textRdv}</Paragraph>
                <Paragraph style={{fontSize: 16, textAlign: 'center', fontWeight: "bold"}}>{textRdvHour}</Paragraph>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    display="inline"
                    mode="datetime"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                    minimumDate={new Date()}
                    is24Hour={true}
                    locale="FR_FR"
                />
                {textRdv.length > 0 ? <Button onPress={takeRdv} title="Prendre rendez-vous"/> : <View/>}
            </View>
        </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})
