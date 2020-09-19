import React, { Component } from 'react';


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
            <p>Username: {username}</p>
            <p>Phone #: {phoneNumber}</p>
            <p>itemsRequested:</p>
            <ol>{itemsRequested.map((item) => <li key={item.itemName}>{item.itemName} {item.itemLocation}</li>)}</ol>
            <p>Request Deadline: {requestDeadline ? requestDeadline.toString() : 'no date selected'}</p>
            <p>Request Deadline time: {requestDeadlineTime}</p>
            <p>Delivery Location: {deliveryLocation}</p>

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