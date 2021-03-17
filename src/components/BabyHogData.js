import React from "react";
import offspring from "../data";
import BabyHog from "./BabyHog";

function BabyHogData() {
    
    const babies = offspring.map((baby) => {
        return <BabyHog id={baby.id} name={baby.name} hobby={baby.hobby}/>
    })
    
    return(
        <section>
        {babies}
        </section>
    );
}

export default BabyHogData;