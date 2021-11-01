import React, {Dispatch, SetStateAction} from "react";
import {useData} from "../hooks/useData";

type IProps = {
    loading?: boolean
    data: Array<any>
}

interface IPropsContext {
    children: React.ReactNode,
    region: string
}

export const dataContext = React.createContext<IProps>({
    data: []
});

export function DataContextProvider(props: IPropsContext) {
    const {data, loading} = useData(props.region);
    return (
        <dataContext.Provider value={{data, loading}}>
            {props.children}
        </dataContext.Provider>
    )
}