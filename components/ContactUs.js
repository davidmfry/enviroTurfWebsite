const ContactUs = (props) => (
    <div>
        <h1>Contact <br/> us</h1>
        <form>
            * First Name
            <input type="text" name='firstname'/>
            * Last Name
            <input type="text" name='lastname'/>
            * Email
            <input type="text" name='email'/>
            Phone Number
            <input type="text" name='firstname'/>
            * Please leave us a message
            <textarea></textarea>
            <input type="submit" value='Submit'/>
        </form>
    </div>
)

export default ContactUs