import React from 'react';
import "./PortfolioList.scss";

export default function PortfolioList({title,active,SetSelected,Id}) {
    return (
        <li className={"portfoliolist "+(active && "active")} onClick={()=>SetSelected(Id)}>
            {title}
        </li>
    )
}
