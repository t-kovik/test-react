import React from 'react';
import {PieChart} from "../Pie";
import {DataContextProvider} from "../../context/dataContext";

export function PieListItem(props: any) {

    return (
        <>
            <DataContextProvider region={props.region}>
                    <PieChart title={props.title}/>
            </DataContextProvider>
        </>
    );
}
