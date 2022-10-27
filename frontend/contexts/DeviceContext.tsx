import React from 'react';

// Declaring the state object globally.
const initialContactState = {
    notificationAuthorized: false
};

const deviceContextWrapper = (component?: React.Component) => ({
    ...initialContactState,
    changeAuthorisation: () => {
        initialContactState.notificationAuthorized = !initialContactState.notificationAuthorized;
        component?.setState({ context: deviceContextWrapper(component) });
    }
});

type Context = ReturnType<typeof deviceContextWrapper>;

export const DeviceContext = React.createContext<Context>(deviceContextWrapper());

interface State {
    context: Context;
}

export class DeviceContextProvider extends React.Component<{children?: React.ReactNode;}, {}> {
    state: State = {
        context: deviceContextWrapper(this),
    };

    render() {
        return (
            <DeviceContext.Provider value={this.state.context}>
                {this.props.children}
            </DeviceContext.Provider>
        );
    }
}
