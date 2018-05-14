import './contactus.css'

const ContactUs = (props) => (
    <div className="contact-us">
        <h1 className="contact-us-title">Contact <br/> us</h1>
        <form className="contact-us-form">
            <div>
                <label>* First Name</label>
                <input type="text" name='firstname'/>
            </div>

            <div>
                <label>* Last Name</label>
                <input type="text" name='lastname'/>
            </div>
            <div>
                <label>* Email</label>
                <input type="text" name='email'/>
            </div>
            <div>
                <label>Phone Number</label>
                <input type="text" name='firstname'/>
            </div>
            <div className="contact-us-message">
                <label>* Please leave us a message</label>
                <textarea rows="4" cols="50"></textarea>
            </div>


        </form>
        <button className="btn">Send</button>
    </div>
)

export default ContactUs