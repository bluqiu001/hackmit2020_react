import React, { Component } from 'react';

function InitialUserInfo(props) {
  return (
    <div>
      <p>Initial User Info</p>
      <form onSubmit={props.handleNext}>
        <label>
          What is your name?
          <input
            name="username"
            type="text"
            checked={props.username}
            onChange={props.onInputChange} />
        </label>
        <br />
        <label>
          What is your phone number?
          <input
            name="phoneNumber"
            type="text"
            value={props.phoneNumber}
            onChange={props.onInputChange} />
        </label>
        <input type="submit" value="Next" />
      </form>
    </div>
  );
}

export default InitialUserInfo;