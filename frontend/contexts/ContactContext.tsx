import React from 'react';
import {MessageType} from "../components/Message";
import discussion from "../data/contact.json";

// Declaring the state object globally.
const initialContactState = {
    messages: discussion as MessageType[]
};

const contactContextWrapper = (component?: React.Component) => ({
    ...initialContactState,
    addMessage: async(message: MessageType) => {
        initialContactState.messages = [...initialContactState.messages, message]
        component?.setState({ context: contactContextWrapper(component) });
    }
});

type Context = ReturnType<typeof contactContextWrapper>;

export const ContactContext = React.createContext<Context>(contactContextWrapper());

interface State {
    context: Context;
}

export class ContactContextProvider extends React.Component<{children?: React.ReactNode;}, {}> {
    state: State = {
        context: contactContextWrapper(this),
    };

    render() {
        return (
            <ContactContext.Provider value={this.state.context}>
                {this.props.children}
            </ContactContext.Provider>
        );
    }
}
