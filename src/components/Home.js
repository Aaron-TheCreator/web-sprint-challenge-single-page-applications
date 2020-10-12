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
            <button className="pizza-button" onclick={routeToPizza}>Make A Pizza!</button>
        </div>
    )
}

export default Home;