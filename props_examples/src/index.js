import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Sdata from "./Sdata";
import Card from "./Card";


ReactDOM.render(
  <React.Fragment>
    <h1 className="heading">Employee Details</h1>
    {
      Sdata.map(function dcard(val)
      {
        console.log(val)
        return (
          <Card
            name={val.name}
            exp={val.exp}
            email={val.email}
          />
        )
      })
    }
    </React.Fragment>,
   document.getElementById("root")
)