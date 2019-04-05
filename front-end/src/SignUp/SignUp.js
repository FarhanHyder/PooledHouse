import React, { Component } from 'react';

class SighUp extends Component {
  constructor(props) {
    super(props);

    this.submit = this.submit.bind(this);
  }

  submit(e) {
    alert('The value is: ' + this.input.value);
    e.preventDefault();
  }

  render() {
    return (<div>
      <label>UserName:
        <input type="text" ref={(input) => this.input = input} />
      </label>
      <form className='container' onSubmit={this.submit}>
        <input type='text' name='FirstName' placeholder='First Name' onChange={this.change} required/>
        <input type='text' name='LastName' placeholder='Last Name' onChange={this.change} required/>
        <input type='date' name='Birthday' placeholder='DOB' onChange={this.change} required/>
        <input type='tel' name='Telephone' placeholder='Phone Number' onChange={this.change} required/>
        <input type="submit" value="Submit" className='button'/>
      </form>
    </div>);
  }
}

export default SighUp;
