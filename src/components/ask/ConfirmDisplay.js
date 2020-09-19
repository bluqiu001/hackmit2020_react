import React, { Component } from 'react';

import RequestInfoDisplay from '../RequestInfoDisplay';


function ConfirmDisplay(props) {
    const info = props.info;
    
    const username = info.username;
    const phoneNumber = info.phoneNumber;
    const itemsRequested = info.itemsRequested;
    const requestDeadline = info.requestDeadline;
    const requestDeadlineTime = info.requestDeadlineTime;
    const deliveryLocation = info.deliveryLocation;

    return (
        <div>
            <RequestInfoDisplay info={info} />

            <button onClick={() => props.goBack(0)}>Back to User Info</button>
            <button onClick={() => props.goBack(1)}>Back to Item List</button>
            <button onClick={() => props.goBack(2)}>Back to datetime selection</button>
            <button onClick={() => props.goBack(3)}>Back to Delivery location selection</button>

            <p>if this looks good, hit the button below</p>
            <button onClick={props.confirm}>Confirm</button>
        </div>
    );
}


export default ConfirmDisplay;