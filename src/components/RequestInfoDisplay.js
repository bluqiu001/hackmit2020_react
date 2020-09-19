import React, { Component } from 'react';


function ReactInfoDisplay(props) {
    const info = props.info;
    
    const username = info ? info.username : '';
    const phoneNumber = info ? info.phoneNumber : '';
    const itemsRequested = info ? info.itemsRequested : [];
    const requestDeadline = info ? info.requestDeadline : '';
    const requestDeadlineTime = info ? info.requestDeadlineTime : '';
    const deliveryLocation = info ? info.deliveryLocation : '';

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