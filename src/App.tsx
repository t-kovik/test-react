import React from "react";
import {Layout} from "./shared/Layout";
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {PieList} from "./shared/PieList";
import './main.global.scss';


export function App() {
    return (
            <Layout>
                <Header />
                <Content>
                    <PieList />
                </Content>
            </Layout>
    )
}