import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import user from "../data/user.json";

// Declaring the state object globally.
const initialUserState = {
    token: "cssd",//localStorage.getItem("token"),
    refeshToken: "",//localStorage.getItem("refeshToken"),
    user: user
};

const userContextWrapper = (component?: React.Component) => ({
    ...initialUserState,
    setTokens: async (token: string, refeshToken: string) => {
        initialUserState.token = token;
        initialUserState.refeshToken = refeshToken;
        await AsyncStorage.setItem("token", token)
        await AsyncStorage.setItem("refeshToken", refeshToken)
        component?.setState({context: userContextWrapper(component)});
    },
    removeTokens: () => {
        initialUserState.token = "";
        initialUserState.refeshToken = "";
        component?.setState({context: userContextWrapper(component)});
    },
});

type Context = ReturnType<typeof userContextWrapper>;

export const UserContext = React.createContext<Context>(userContextWrapper());

interface State {
    context: Context;
}

export class UserContextProvider extends React.Component<{ children?: React.ReactNode; }, {}> {
    state: State = {
        context: userContextWrapper(this),
    };

    render() {
        return (
            <UserContext.Provider value={this.state.context}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}
