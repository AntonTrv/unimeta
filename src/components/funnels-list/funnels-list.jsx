import React from "react";
import './funnels-list.scss';

const List = ({funnels,handleClick}) => (
    <select className="list"  onChange={handleClick}>
        {funnels.map((funnel,i) => (
            <option key={i} value={funnel.site}>{funnel.site}</option>
        ))}
    </select>
)

export default List;