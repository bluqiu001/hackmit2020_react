import React, { Component } from 'react';
import {
    Link,
} from "react-router-dom";

import InitialUserInfo from '../components/ask/InitialUserInfo';
import RequestListCreation from '../components/ask/RequestListCreation';
import DeliveryTimeCalendar from '../components/ask/DeliveryTimeCalendar';
import LocationSelector from '../components/ask/LocationSelector';
import ConfirmDisplay from '../components/ask/ConfirmDisplay';
import RequestInfoDisplay from '../components/RequestInfoDisplay';
import firebase from '../firebase/firebase.js'; // <--- add this line


class ask extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username : '',
      phoneNumber : '',
      itemsRequested: [],
      requestDeadline: null,
      requestDeadlineTime: null,
      deliveryLocation: null,

      askStatus: 0,
    };
    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleListItemCreation = this.handleListItemCreation.bind(this);
    this.removeListItem = this.removeListItem.bind(this);
    this.setDeliveryDay = this.setDeliveryDay.bind(this);
    this.setDeliveryTime = this.setDeliveryTime.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.returnToPage = this.returnToPage.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleListItemCreation(newItem) {
    this.setState({
      itemsRequested : [...this.state.itemsRequested, newItem]
    })
  }

  removeListItem(itemIndex) {
    const removedList = this.state.itemsRequested;
    removedList.splice(itemIndex);
    this.setState({
      itemsRequested : removedList,
    })
  }

  setDeliveryDay(day) {
    this.setState({
      requestDeadline : day,
    })
  }

  setDeliveryTime(time) {
    this.setState({
      requestDeadlineTime : time,
    })
  }

  handleNext(event) {
    event.preventDefault();
    this.setState({ askStatus : this.state.askStatus + 1})
    console.log(this.state.askStatus)
    if (this.state.askStatus == 4)  {
      console.log("here")
      const itemsRef = firebase.database().ref('items');
      const item = {
      username: this.state.username,
      phoneNumber: this.state.phoneNumber,
      itemsRequested: this.state.itemsRequested,
      requestDeadline: this.state.requestDeadline,
      requestDeadlineTime: this.state.requestDeadlineTime,
      deliveryLocation: this.state.deliveryLocation
   }
    itemsRef.push(item);
    // firebase.database().ref('users/' + this.state.username).set({
    //  phoneNumber: this.state.phoneNumber,
    //  itemsRequested: this.state.itemsRequested,
    //  requestDeadline: this.state.requestDeadline,
    //  requestDeadlineTime: this.state.requestDeadlineTime,
    //  deliveryLocation: this.state.deliveryLocation
    // })
    }
  }

  returnToPage(pageNumber) {
    pageNumber.preventDefault();
    this.setState({ askStatus : pageNumber });
    
    

  }

  render() {
    //console.log("STATE", this.state);
    return (
      <div>
        <div>asking</div>
        {(() => {
          switch (this.state.askStatus) {
            case 0 :
                return (
                  <InitialUserInfo 
                    onInputChange={this.handleInputChange} 
                    username={this.state.username} 
                    phoneNumber={this.state.phoneNumber} 
                    handleNext={this.handleNext}
                    />
                )
            case 1 :
                return (
                  <RequestListCreation
                    onInputChange={this.handleInputChange} 
                    addNewItem={this.handleListItemCreation}
                    removeListItem={this.removeListItem}
                    listItems={this.state.itemsRequested}
                    handleNext={this.handleNext}                  
                    />
                )
            case 2 :
                return (
                  <DeliveryTimeCalendar
                  changeDeliveryDate={this.setDeliveryDay}
                  changeDeliveryTime={this.setDeliveryTime}
                  handleNext={this.handleNext}
                  />
                )
            case 3 :
                return (
                  <LocationSelector handleNext={this.handleNext}/>
                )

            case 4 :
              return (
                <ConfirmDisplay info={this.state} goBack={this.returnToPage} confirm={this.handleNext}/>
              )
            case 5 :
              return (
                <div>
                  <p>Confirmed!</p>
                  <RequestInfoDisplay info={this.state} />
                  <Link to='/'>Back to homepage</Link>
                </div>
              )
            default:
              return null;
          }
        })()}
      </div>
    );
  }
}

export default ask;