import { CollectionsOutlined } from '@material-ui/icons';
import React, { Component } from 'react';
import {
    Link,
} from "react-router-dom";


import ReactScrollableList from 'react-scrollable-list';

import RequestInfoDisplay from '../components/RequestInfoDisplay';

import firebase from '../firebase/firebase.js'; // <--- add this line

class volunteer extends Component {

  componentDidMount() {
    console.log("loading");
  }

  constructor(props) {
    super(props);

    this.state = {
      selectedRequest : null,
    }

    this.changeSelectedRequest = this.changeSelectedRequest.bind(this);
  }

  changeSelectedRequest(request) {
    this.setState({
      selectedRequest : request,
    })
  }
  
  render() {

    var request_info = {
      username : '',
      phoneNumber : '',
      itemsRequested: [],
      requestDeadline: null,
      requestDeadlineTime: null,
      deliveryLocation: null,
  
      askStatus: 0,
    };
    let exampleRequestList = [];
    const itemsRef = firebase.database().ref('items')
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      
      for (let item in items) {
        exampleRequestList.push({
          username: items[item].username,
          phoneNumber: items[item].phoneNumber,
          itemsRequested: items[item].itemsRequested,
          requestDeadline: items[item].requestDeadline,
          requestDeadlineTime: items[item].requestDeadlineTime,
          deliveryLocation: items[item].deliveryLocation
        })
        console.log("here")
        console.log(exampleRequestList)
        
      }
    });


    // const exampleRequestList = [
    //   {
    //     'username' : 'Charlie Luo',
    //     'phoneNumber': '6094365970',
    //     'requestDeadline': '10 am', //should be real timestamp
    //     'deliveryLocation' : '???', //need to figure out format
    //     'assignedUser' : 'user uid', // do not display if assigned user is true
    //     'itemsRequested' : [
    //       {'itemName': 'example item', 'itemLocation' : 'example item location'}
    //     ],
    //   },
    //   {
    //     'username' : 'ANother test user',
    //     'phoneNumber': '123124124',
    //     'requestDeadline': '11 am', //should be real timestamp
    //     'deliveryLocation' : 'something here', //need to figure out format
    //     'assignedUser' : 'user uid', // do not display if assigned user is true
    //     'itemsRequested' : [
    //       {'itemName': 'milk', 'itemLocation' : 'walmart'}
    //     ],
    //   }
    //  ];
    const exampleRequestListDisplay = [];

    console.log(exampleRequestList)
    exampleRequestList.map(
      (item, index) => {
        const displayItem = item;
        displayItem.id = index;
        displayItem.content = (
          <div>
            <p>{displayItem.username}</p>
            <button onClick={() => this.changeSelectedRequest(item)}>Select this request</button>
          </div>
          );
        exampleRequestListDisplay.push(displayItem);
      }
    )
    return (
        <div>
            <p>where are you located?</p>
            <ReactScrollableList
              listItems={exampleRequestListDisplay}
            />

            <RequestInfoDisplay info={this.state.selectedRequest} />
            <button>Take this request?</button>


            <p> your chosen requests, TODO down below</p>

        </div>
    );
  }
}


export default volunteer;