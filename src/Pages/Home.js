import React, { Component } from "react";
import MainLayout from "../Layout/MainLayout";
import Fullscreen from "../Components/Fullscreen";

class Home extends Component {
    render() {
        return (
            <div>
            <Fullscreen  
            image="../img/surfspot.jpg" 
                 />
            <MainLayout>
                <h1>Welcome to Surfspots</h1>
                <p>We`ve all been there. You`re travelling to a new place and you have been googling surfspots for a week.
                    Finally, there i a solution.
                </p>
                <button>See surfspots</button>

            </MainLayout>
            </div>
        )
    }
}

export default Home;