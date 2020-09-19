import React, { Component } from 'react';
import {
    Link,
} from "react-router-dom";


import { connect } from 'react-redux';

class home extends Component {

  componentDidMount() {
    console.log("loading");
  }

  render() {
    return (
        <div>
            <Link to='/ask'>Request help</Link>
            <br />
            <Link to='/volunteer'>Volunteer</Link>
        </div>
    );
  }
}

export default home;