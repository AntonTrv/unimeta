import React from "react";
import PropTypes from 'prop-types';
import './funnel-data.scss';

const FunnelData = ({activeFunnel,configs}) => (
    <div className='funnel-data-wrapper'>
        <div className="bar">{activeFunnel.is_active ? <div className="status-wrapper"><span className='status'>Active </span><div className='dot green'></div> </div> : <div className="status-wrapper"><span className='status'><a href='https://youtu.be/3fHLQmwZiSk?t=14'>Ooops</a>  </span><div className='dot red'></div></div> }</div>
        <div className='screenshot-wrapper meta'>
            <img src={activeFunnel ? `http://${activeFunnel.domain}/assets/img/screenshot.png` : "https://cdn-st1.rtr-vesti.ru/p/xw_1004150.jpg"} alt='&nbsp; Ooops https://www.youtube.com/watch?v=dQw4w9WgXcQ'/>
        </div>

        <div className="meta-wrapper">
        <div className="funnel-meta light meta">
            <p className="tag"><b>domain:</b> {activeFunnel.domain}</p>
        <p className="tag"><b>active:</b> {activeFunnel.is_active ? 'true' : "false"}</p>

        </div>
        <div className='configs light meta'>
            <div className='tag'>Title: {configs.PAGE_TITLE ? configs.PAGE_TITLE : 'Not defined'}</div>
            <div className='tag'>Template name: {configs.TEMPLATE_NAME}</div>
            <div className='tag'>Translation type: {configs.TRANSLATIONS_TYPE ? configs.TRANSLATIONS_TYPE : 'Not defined'}</div>
            <div className='tag'>Translation mode: {configs.TRANSLATIONS_MODE ? configs.TRANSLATIONS_MODE : 'Not defined'}</div>
            <div className='tag'>Supported languages: <ul className='custom_map'>{configs.SUPPORTED_LANGUAGES ? configs.SUPPORTED_LANGUAGES.split(',').map((el,i) => <li key={i} className="custom_language">{el}</li>) : null}</ul></div>
            <div className='tag'>Custom map languages: <ul className='custom_map'> {configs.CUSTOM_MAP_LANGUAGES ? Object.entries(configs.CUSTOM_MAP_LANGUAGES).map(([key,value]) => (<li key={key} className='custom_language'>{key}:{value}|</li>)) : 'Not defined'}</ul></div>
            <div className='tag'>Customer ID: {configs.CUSTOMER_ID ? configs.CUSTOMER_ID.map(customer => <span>&nbsp;{customer};&nbsp; </span>) : 'Not defined'}</div>
        </div>
    </div>

    </div>
)

FunnelData.propTypes = {
    activeFunnel: PropTypes.object,
    total: PropTypes.number,
    configs: PropTypes.object
}
export default FunnelData;