import React, { createContext, useReducer } from "react";
import {reducer} from "../reducer/reducer";

export const ArticleContext = createContext();

const ArticleProvider = ({ children }) =>
{
    const state =
    [
        { id: 1, title: "Tree", body: "Tree is essential for human life." },
        { id: 2, title: "Water", body: "Water is essential for survival of human life." }
    ];

    const [articles, dispatch] = useReducer(reducer, state);

    return (
        <ArticleContext.Provider value={{ articles, dispatch }}>
            {children}
        </ArticleContext.Provider>
    );
};

export default ArticleProvider;