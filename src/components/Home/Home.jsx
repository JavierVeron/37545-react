import React from "react";
import Cupones from "./Cupones";
import Destacado from "./Destacado";
import PromoApp from "./PromoApp";

const Home = () => {
    return (
        <div>
            <Destacado />
            <Cupones />
            <PromoApp />
        </div>
    )
}

export default Home;