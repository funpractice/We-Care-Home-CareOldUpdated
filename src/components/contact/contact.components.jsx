import React from 'react';
import './contact.styles.css'


import { Form, Input, Button, Checkbox } from 'antd';
const { TextArea } = Input;

function Contact() {
  return (
    <div id="contact" className="block contactBlock">
      <div className="quickSupport">
          <h3>Want quick support?</h3>
          <p>Our Mission is to empower millions of service professionals by delivering services at-home in a way that has never been experienced before.</p>
          <Button className="buton" type="primary" size="large" href="mailto:abc@gmail.com"><i className="fas fa-envelope"></i> Email Us</Button>
          {/* <button className="button" href="mailto:abc@gmail.com">Email Us</button> */}
        </div>
    </div>  
  );
}

export default Contact;