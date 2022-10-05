import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";
import emailjs from 'emailjs-com'
// import { toast } from 'react-toastify';
class Contact extends Component {

  constructor(props){
    super(props)
    this.state = {
      name: '',
      email: '',
      subject: '',
      content:''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangeSubject = this.handleChangeSubject.bind(this)
  }

  sendEmail = (e) => {
      if((this.state.content !== '' && this.state.content !== null && this.state.content !== undefined) && 
          (this.state.name !== '' && this.state.name !== null && this.state.name !== undefined) && 
          (this.state.email !== '' && this.state.email !== null && this.state.email !== undefined) && 
          (this.state.subject !== '' && this.state.subject !== null && this.state.subject !== undefined)){
          e.preventDefault();
          emailjs.send('service_sc6hxk5', 'template_qehbtoy', {
              name: this.state.name,
              email: this.state.email,
              subject: this.state.subject,
              message: this.state.content
          }, 'user_minqCOuSYQdQPwDjoVYj9')
          .then((result) => {
              console.log(result.text);
              this.setState({
                name:'',
                content:'',
                email:'',
                subject:''
              })
              alert('Your message is sent. Please wait...\n Murtaza will contact you soon.')
          }, (error) => {
              console.log(error.text);
          });
      } else {
          alert('Please enter all fields')
      }
  }
  
  handleChangeName = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  handleChangeEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }
  handleChangeSubject = (e) => {
    this.setState({
      subject: e.target.value
    })
  }
  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }

  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const message = this.props.data.contactmessage;

    return (
      <section id="contact">
        <Slide right duration={1}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>

            <div className="ten columns">
              <p className="lead">{message}</p>
            </div>
          </div>
        </Slide>

        <div className="row">
          <Slide left duration={1000}>
            <div className="eight columns">
              <form action="" method="post" id="contactForm" name="contactForm">
                <fieldset>
                  <div>
                    <label htmlFor="name">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      value={this.state.name}
                      size="35"
                      id="name"
                      name="name"
                      onChange={this.handleChangeName}
                    />
                  </div>

                  <div>
                    <label htmlFor="email">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      value={this.state.email}
                      size="35"
                      id="email"
                      name="email"
                      onChange={this.handleChangeEmail}
                    />
                  </div>

                  <div>
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      value={this.state.subject}
                      size="35"
                      id="subject"
                      name="subject"
                      onChange={this.handleChangeSubject}
                    />
                  </div>

                  <div>
                    <label htmlFor="message">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      cols="50"
                      rows="15"
                      value={this.state.content}
                      id="message"
                      name="content"
                      onChange={this.handleChange}
                    ></textarea>
                  </div>

                  <div>
                    <button className="submit" onClick={this.sendEmail}>Submit</button>
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  </div>
                </fieldset>
              </form>

              <div id="message-warning"> Error boy</div>
              <div id="message-success">
                <i className="fa fa-check"></i>Your message was sent, thank you!
                <br />
              </div>
            </div>
          </Slide>

          {/* <Slide right duration={1000}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Address and Phone</h4>
                <p className="address">
                  {name}
                  <br />
                  {street} <br />
                  {city}, {state} {zip}
                  <br />
                  <span>{phone}</span>
                </p>
              </div>

              <div className="widget widget_tweets">
                <h4 className="widget-title">Latest Tweets</h4>
                <ul id="twitter">
                  <li>
                    <span>
                      This is Photoshop's version of Lorem Ipsum. Proin gravida
                      nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                      quis bibendum auctor, nisi elit consequat ipsum
                      <a href="./">http://t.co/CGIrdxIlI3</a>
                    </span>
                    <b>
                      <a href="./">2 Days Ago</a>
                    </b>
                  </li>
                  <li>
                    <span>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi
                      <a href="./">http://t.co/CGIrdxIlI3</a>
                    </span>
                    <b>
                      <a href="./">3 Days Ago</a>
                    </b>
                  </li>
                </ul>
              </div>
            </aside>
          </Slide> */}
        </div>
      </section>
    );
  }
}

export default Contact;
