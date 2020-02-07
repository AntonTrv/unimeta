import React from "react";
import PropTypes from 'prop-types';
import CustomScroll from 'react-customscroll';
import './funnels-list.scss';

const List = ({funnels,handleClick,input}) => (

    <div className='list-wrapper light' style={{height: '90vh', overflow: 'hidden', direction: 'rtl'}}>
        <CustomScroll>
        <ul className='list'>
            {input.length ? input.map((funnel,i) => (
                    <li onClick={handleClick} className="funnel-li" key={i} >{funnel.site}</li>
                )) :
                funnels.map((funnel,i) => (
                <li onClick={handleClick} className="funnel-li" key={i} >{funnel.site}</li>
            ))

            }
        </ul>
        </CustomScroll>
    </div>

)

List.propTypes = {
    funnels: PropTypes.array,
    handleClick: PropTypes.func,
    input: PropTypes.array
}

export default List;