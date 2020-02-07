import React from "react";
import PropTypes from 'prop-types';
import './funnel-data.scss';

const FunnelData = ({activeFunnel,total}) => (
    <div className='funnel-data-wrapper'>
        <div className="bar">{activeFunnel.is_active ? <div className="status-wrapper"><span className='status'>Active </span><div className='dot green'></div> </div> : <div className="status-wrapper"><span className='status'><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Ooops</a>  </span><div className='dot red'></div></div> }</div>
        <div className="funnel-meta light meta">
            <p className="tag"><b>domain:</b> {activeFunnel.domain}</p>
        <p className="tag"><b>active:</b> {activeFunnel.is_active ? 'true' : "false"}</p>

        </div>
        <div className='screenshot-wrapper meta'>
        <img src={activeFunnel ? `http://${activeFunnel.domain}/assets/img/screenshot.png` : "https://cdn-st1.rtr-vesti.ru/p/xw_1004150.jpg"} alt='Ooops https://www.youtube.com/watch?v=dQw4w9WgXcQ'/>
        </div>
    </div>
)

FunnelData.propTypes = {
    activeFunnel: PropTypes.object,
    total: PropTypes.number
}
export default FunnelData;