import React, { Component } from "react";
import MainLayout from "../Layout/MainLayout";
import Fullscreen from "../Components/Fullscreen";

class Home extends Component {
    render() {
        return (
            <MainLayout>
                <Fullscreen image="../img/beers.png" title="Create your personal Weatherforcast"/>
            </MainLayout>
        )
    }
}

export default Home;