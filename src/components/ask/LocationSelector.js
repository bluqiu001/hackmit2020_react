import React, { Component } from 'react';

class LocationSelector extends Component {
    render() {
        const day = this.props.deliveryDate;
        const time = this.props.deliveryTime;

        return (
            <div>
              <p>Placeholder for now, should be maps screen</p>

              <button onClick={this.props.handleNext}>Next </button>
            </div>

          );
    }
}



export default LocationSelector;