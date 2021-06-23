import "./Contact.scss"
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import SendIcon from '@material-ui/icons/Send';

export default function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="top">
                <div className="contact_text">
                    <h1 className="heading">Contact</h1> 
                    <h2>Want to colab ? You can write to me below.</h2>
                    <h2>or , just drop a <span className='gradient'>Hi!</span> here.</h2>
                </div>
                <div className="arrow">
                    <img src="assets\transparent-curved-arrow.png" alt="" />
                </div>
                <div className="logocontainer">
                    <div className="githublogocontainer" onClick={()=>{window.open('https://github.com/anshul-raj')}}>
                        <GitHubIcon className="github-logo"/>
                    </div>
                    <div className="linkdinlogocontainer gradient" onClick={()=>{window.open('https://www.linkedin.com/in/anshul-raj-59b3b7179/')}}>
                        <LinkedInIcon className="linkdin-logo"/>
                    </div>
                    <div className="instalogocontainer gradient" onClick={()=>{window.open('https://www.instagram.com/_anshul_raj_/')}}>
                        <InstagramIcon className="insta-logo"/>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <form action="" className="contactform">
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="Email"/>
                    <textarea type="message" placeholder="Your message" className="messagebox"/>
                    <button type="submit" className="submitbutton gradient">Send <SendIcon className="sendicon"/></button>
                </form>
            </div>
        </div>
    )
}
