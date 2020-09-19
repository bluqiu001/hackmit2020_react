import React, { Component } from 'react';

import Calendar from 'react-calendar';
import TimePicker from 'react-time-picker';

class RequestListCreation extends Component {
    render() {
        const day = this.props.deliveryDate;
        const time = this.props.deliveryTime;

        return (
            <div>
              <p>What time do you want this delivered?</p>
              <Calendar 
              onClickDay={(event) => this.props.changeDeliveryDate(event)}
              />
              <TimePicker 
              onChange={(time) => this.props.changeDeliveryTime(time)}
              value={time}
              />
              <p>{day} {time}</p>

              <button onClick={this.props.handleNext}>Select date and time </button>
            </div>

          );
    }
}



export default RequestListCreation;