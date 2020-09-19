import React, { Component } from 'react';


function ReactInfoDisplay(props) {
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
        </div>
    );
}


export default ReactInfoDisplay;