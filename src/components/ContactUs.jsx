import React, {  } from 'react';

class Contact extends React.Component {
  render() {
    return (
      <form>
        <p> </p>
        <p> </p>
        <h1>Please let us know what you think?</h1>
        <p>Enter your name: <input type="text" name="name" /></p>
        <p>Enter your phone: <input type="text" name="phone"/></p>
        <p>Enter your email: <input type="text" name="email" /></p>
        <p>Enter your Message: <input type="text" name="TextArea" /></p>
        
      </form>
    );
  }
}

export default Contact
