import React, { Component } from 'react';


class RequestListCreation extends Component {

    constructor(props) {
        super(props);

        this.state = {
            itemName : '',
            itemLocation : '',
        }


        this.addNewListItem = this.addNewListItem.bind(this);
        this.handleItemInputChange = this.handleItemInputChange.bind(this);
    }


    handleItemInputChange(event) {
        this.setState({ 
            [event.target.name] : event.target.value,
        })
    }

    addNewListItem(event) {
        event.preventDefault();

        const itemName = this.state.itemName;
        const itemLocation = this.state.itemLocation;

        this.props.addNewItem({
            'itemName' : itemName,
            'itemLocation' : itemLocation,
        })

        this.setState({
            itemName : '',
            itemLocation : '',
        })
    }


    render() {

        const itemName = this.state.itemName;
        const itemLocation = this.state.itemLocation;

        console.log("PROPS", this.props)
        const items = this.props.listItems.map(
            (item, index) => <li key={item.itemName}>
                {item.itemName} {item.itemLocation}
                <button onClick={() => this.props.removeListItem(index)}>Remove</button>
                </li>
        )

        return (
            <div>
              <p>Request List Creation</p>
              <form onSubmit={this.addNewListItem}>
                <label>
                  What do you need?
                  <input
                    name="itemName"
                    type="text"
                    value={itemName}
                    onChange={this.handleItemInputChange} />
                </label>
                <br />
                <label>
                  Where is this item located?
                  <input
                    name="itemLocation"
                    type="text"
                    value={itemLocation}
                    onChange={this.handleItemInputChange} />
                </label>
                <input type="submit" value="Submit" />
              </form>

              <button onClick={this.props.handleNext}>Next</button>

              <ol>{items}</ol>

            </div>

          );
    }
}



export default RequestListCreation;