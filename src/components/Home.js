import React from "react";
import { useHistory } from "react-router-dom";

function Home(props) {
    console.log(props);
    const history = useHistory();

    const routeToPizza = () => {
        history.push("/pizza")
    }

    return (
        <div className="home-cont">
            <div className="home-card">
                <h2>
                    fuelUpForYourNextFunction(pizza)
                </h2>
                <div className="home-img" ></div>
                <button className="button" onClick={routeToPizza}>Make A Pizza!</button>
            </div>
        </div>
    )
}

export default Home;