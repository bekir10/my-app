import React from "react";
import "./card-list.styles.css";

import {Card} from "../card/card.component";

//props- parameter that we get from functional component
export const CardList = props =>( 

    <div className="card-list">
    {  props.monsters.map(monster =>(
           <Card key={monster.id} monster={monster} /*props*//>
           ))}
           {/*props.children*/ }
</div>
);