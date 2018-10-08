import React, { Component } from 'react';

class PhoneForm extends Component {
  state = {
    name: '',
    phone: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    
    });
  }

  handleSubmit = (e) => {
    // stop reloading
    e.preventDefault();
    // translate to parent via onCreate
    this.props.onCreate(this.state);
    // Init state
    this.setState({
      name: '',
      phone: ''
    })
  }
 
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
        <input
          placeholder="Phone"
          value={this.state.phone}
          onChange={this.handleChange}
          name="phone"
        />
         <button type="submit">Register</button>
        <div>{this.state.name} {this.state.phone}</div>
        
      </form>
    );
  }
}

export default PhoneForm;