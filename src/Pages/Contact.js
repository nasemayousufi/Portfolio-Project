const ContactForm = () => {
    return (
        <main className="contact-form-container">
            <h1 style={{ color: '#444' }}>Get in Touch</h1>
            <form className="contact-form" method="post" action="https://webdevbasics.net/scripts/demo.php">
                <div className="form-group">
                    <label htmlFor="myName">Name:</label>
                    <input type="text" name="myName" id="myName" />
                </div>
                <div className="form-group">
                    <label htmlFor="myEmail">Email:</label>
                    <input type="email" name="myEmail" id="myEmail" />
                </div>
                <div className="form-group">
                    <label htmlFor="myComments">Comments:</label>
                    <textarea
                        name="myComments"
                        id="myComments"
                        rows="2"
                        cols="20"
                    ></textarea>
                </div>
                <div className="button-group">
                    <input type="submit" id="mySubmit" value="Submit" />
                    <input type="reset" id="myReset" value="Reset" />
                </div>
            </form>
        </main>
    );
};

export default ContactForm;