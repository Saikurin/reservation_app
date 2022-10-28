export type EventCalendarService = {
    name: string;
    quantity: number;
    time: number;
}

export type EventCalendar = {
    id: number;
    dateStart: string;
    status: string;
    services: EventCalendarService[]
}
