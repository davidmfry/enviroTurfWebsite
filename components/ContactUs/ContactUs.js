

import './contactus.css'
import firebase from '../../config/firebase';



class ContactUs extends React.Component
{
    state = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    handleSubmit (values)
    {
        // getting a ref to a firebase database called message
        const itemsRef = firebase.database().ref('messages');
        itemsRef.push(values);

        this.sendEmail(values);

        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: ''
        });
    }


    render ()
    {
        return (
            <div className="contact-us">
                <h1 className="contact-us-title">Contact us</h1>
                <form className="contact-us-form" action="https://formspree.io/jkatherinel@etsllcturf.com"
                      method="POST">
                    <div>
                        <label>* First Name</label>
                        <input
                            type="text"
                            name='firstname'
                            value={this.state.firstName}
                            onChange={e => this.setState({firstName: e.target.value})}
                        />
                    </div>

                    <div>
                        <label>* Last Name</label>
                        <input
                            type="text"
                            name='lastname'
                            value={this.state.lastName}
                            onChange={e => this.setState({lastName: e.target.value})}
                        />
                    </div>
                    <div>
                        <label>* Email</label>
                        <input
                            type="text"
                            name='email'
                            value={this.state.email}
                            onChange={e => this.setState({email: e.target.value})}
                        />
                    </div>
                    <div>
                        <label>Phone Number</label>
                        <input
                            type="text"
                            name='phone'
                            value={this.state.phone}
                            onChange={e => this.setState({phone: e.target.value})}
                        />
                    </div>
                    <div className="contact-us-message">
                        <label>* Please leave us a message</label>
                        <textarea
                            rows="4"
                            cols="50"
                            value={this.state.message}
                            onChange={e => this.setState({message: e.target.value})}
                            name="message"
                        ></textarea>
                    </div>
                    <button type="submit" className="btn" onClick={() => {
                        this.handleSubmit({firstName: this.state.firstName,
                            lastName: this.state.lastName,
                            email: this.state.email,
                            phone: this.state.phone,
                            message: this.state.message})
                    }}>Send</button>
                </form>

            </div>
        )
    }
}





export default ContactUs