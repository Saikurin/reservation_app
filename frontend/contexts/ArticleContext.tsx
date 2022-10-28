import React from 'react';
import {ArticleType} from "../components/Article";

// Declaring the state object globally.
const initialUserState = {
    selectedArticle: {} as ArticleType,
};

const articleContextWrapper = (component?: React.Component) => ({
    ...initialUserState,
    setArticle: (article: ArticleType) => {
        initialUserState.selectedArticle = article;
        component?.setState({ context: articleContextWrapper(component) });
    }
});

type Context = ReturnType<typeof articleContextWrapper>;

export const ArticleContext = React.createContext<Context>(articleContextWrapper());

interface State {
    context: Context;
}

export class ArticleContextProvider extends React.Component<{children?: React.ReactNode;}, {}> {
    state: State = {
        context: articleContextWrapper(this),
    };

    render() {
        return (
            <ArticleContext.Provider value={this.state.context}>
                {this.props.children}
            </ArticleContext.Provider>
        );
    }
}
