import React from 'react';
import events from "../data/eventCalendar.json";
import {EventCalendar} from "../types/EventCalendar";
import {AgendaSchedule} from "react-native-calendars/src";


// Declaring the state object globally.
const initialEventsState = {
    events: events as EventCalendar[],
    eventsAgenda: {} as AgendaSchedule,
};

const eventContextWrapper = (component?: React.Component) => ({
    ...initialEventsState,
    load: async () => {
        let eventsAgenda: AgendaSchedule = {}
        events.map((e: EventCalendar) => {
            if (typeof eventsAgenda[e.dateStart.substring(0, 10)] == "undefined") {
                eventsAgenda[e.dateStart.substring(0, 10)] = []
            }
                eventsAgenda[e.dateStart.substring(0, 10)].push({name: e.id.toString(), height: 1, day: "0"})
        });
        initialEventsState.eventsAgenda = eventsAgenda;
        component?.setState({context: eventContextWrapper(component)});
    },
    setEvents: async (events: EventCalendar[]) => {
        initialEventsState.events = events;
        component?.setState({context: eventContextWrapper(component)});
    },
    addEvent: async (event: EventCalendar) => {
        initialEventsState.events = [...initialEventsState.events, event]
        component?.setState({context: eventContextWrapper(component)});
    }
});

type Context = ReturnType<typeof eventContextWrapper>;

export const EventContext = React.createContext<Context>(eventContextWrapper());

interface State {
    context: Context;
}

export class EventContextProvider extends React.Component<{ children?: React.ReactNode; }, {}> {
    state: State = {
        context: eventContextWrapper(this),
    };

    render() {
        return (
            <EventContext.Provider value={this.state.context}>
                {this.props.children}
            </EventContext.Provider>
        );
    }
}
