import {RootTabScreenProps} from "../types";
import React, {useEffect} from 'react'
import {Agenda, LocaleConfig} from "react-native-calendars/src";
import {View} from "../components/Themed";
import CalendarItem from "../components/CalendarItem";
import {EventContext} from "../contexts/EventContext";

export default function CalendarScreen({}: RootTabScreenProps<'Calendar'>) {

    const {load, eventsAgenda} = React.useContext(EventContext);

    useEffect(() => {
        load()
    }, []);


    LocaleConfig.locales['fr'] = {
        monthNames: [
            'Janvier',
            'Février',
            'Mars',
            'Avril',
            'Mai',
            'Juin',
            'Juillet',
            'Août',
            'Septembre',
            'Octobre',
            'Novembre',
            'Décembre'
        ],
        monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
        dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
        dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
        today: "Aujourd'hui"
    };
    LocaleConfig.defaultLocale = 'fr';

    return (
        <View style={{flex: 1}}>
            <Agenda
                // The list of items that have to be displayed in agenda. If you want to render item as empty date
                // the value of date key has to be an empty array []. If there exists no value for date key it is
                // considered that the date in question is not yet loaded
                items={eventsAgenda}
                // Callback that gets called when items for a certain month should be loaded (month became visible)
                loadItemsForMonth={month => {
                }}
                firstDay={1}
                // Callback that fires when the calendar is opened or closed
                onCalendarToggled={calendarOpened => {
                }}
                // Callback that gets called on day press
                onDayPress={day => {
                }}
                // Callback that gets called when day changes while scrolling agenda list
                onDayChange={day => {
                }}
                pastScrollRange={50}
                // Max amount of months allowed to scroll to the future. Default = 50
                futureScrollRange={50}
                // Specify how each item should be rendered in agenda
                renderItem={(item, firstItemInDay) => {
                    console.log(item);
                    return <CalendarItem event={item}></CalendarItem>
                }}
                // Specify how each date should be rendered. day can be undefined if the item is not first in that day
                renderDay={(day, item) => {
                    return <View/>;
                }}
                // Specify how empty date content with no items should be rendered
                renderEmptyDate={() => {
                    return <View/>;
                }}
                // Specify how agenda knob should look like
                renderKnob={() => {
                    return <View/>;
                }}
                // Specify what should be rendered instead of ActivityIndicator
                renderEmptyData={() => {
                    return <View/>;
                }}
                // Hide knob button. Default = false
                // Agenda theme
                theme={{
                    agendaDayTextColor: 'yellow',
                    agendaDayNumColor: 'green',
                    agendaTodayColor: 'red',
                    agendaKnobColor: 'blue'
                }}
                // Agenda container style
                style={{}}></Agenda>
        </View>
    )
}
