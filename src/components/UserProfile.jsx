// Importing Component 
import  { Component } from 'react';

class UserProfile extends Component {
    constructor(props) {
        super(props)
        this.state = { name: 'Alex' }
        // Adding this line to bind the name to the local state
        this.changeName = this.changeName.bind(this)
    }

    // Using 'setState' instead of reassigning the variable
    changeName() {
        this.setState({ 
            name: 'Charlie'
        })
    }

    render() {
        return (
            <div className="text-center border border-info bg-info bg-opacity-10 rounded p-3 mt-5">
                <h1>User Profile</h1>
                <p>Name: {this.state.name}</p>
                <button className="btn btn-info" onClick={this.changeName}>Change Name</button>
            </div>
        );
    }
}

// Adding the export default
export default UserProfile;