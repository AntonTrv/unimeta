import React from "react";
import './funnel-data.scss';

const FunnelData = ({activeFunnel,total}) => (
    <div className='funnel-data-wrapper'>
        <p>domain: {activeFunnel.domain}</p>
        <p>active: {activeFunnel.is_active ? 'true' : "false"}</p>
        <p>total: {total}</p>
    </div>
)

export default FunnelData;