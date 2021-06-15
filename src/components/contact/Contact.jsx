import React, { useState } from 'react';
import "./contact.scss";
import emailjs, {init} from 'emailjs-com';

export default function Contact() {

  init("user_2fpt0IefAXvRE6o6YFmQ8");

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: ""
  })

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.send('service_s4v8klj', 'template_88hvkgm', formData, 'user_2fpt0IefAXvRE6o6YFmQ8')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    setFormData({email: "", name: "", message: ""});
    setSubmitted(true);

  }

  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="left">
          <img src="/assets/mailbox.png" alt=""/>
        </div>
        <div className="right">
          <h1 className={"" + (submitted && "submitted")}>Contact</h1>
          <form className={"" + (submitted && "submitted")} onSubmit={e => handleSubmit(e)}>
            <input type="text" name="name" value={formData.name} placeholder="Name" onChange={event => {
              setFormData({
                ...formData,
                name: event.target.value
              })
            }}/>
            <input type="text" name="email" value={formData.email} placeholder="Email" onChange={event => {
              setFormData({
                ...formData,
                email: event.target.value
              })
            }} />
            <textarea name="message" value={formData.message} placeholder="Message" onChange={event => {
              setFormData({
                ...formData,
                message: event.target.value
              })
            }} />
            <button type="submit" >Send</button>
          </form>
          <h3 className={"" + (submitted && "submitted")}>Thanks! I'll be in touch soon. :)</h3>
        </div>
      </div>
      
    </div>
  )
}
