import React from "react";
import { Helplist } from "./Helplist";

const Secondsection = () => {
  return (
    <div className="Secondsection">
      {Helplist.map((items, index) => {
        return (
          <div key={index} className={items.cName}>
            <div className="icons" style={{background:items.color}}> {items.icons} </div> <br />
            <h3> {items.header} </h3>
            {items.text}
          </div>
        );
      })}
    </div>
  );
};

export default Secondsection;
