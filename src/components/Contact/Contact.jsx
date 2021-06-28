import "./Contact.scss"
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import SendIcon from '@material-ui/icons/Send';
import { useState } from "react";
import emailjs from 'emailjs-com';

export default function Contact() {

    const [msg, setmsg] = useState(false);

    const [formName, setformName] = useState('');
    const [formEmail, setformEmail] = useState('');
    const [formMsg, setformMsg] = useState('');

    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const USER_ID = process.env.REACT_APP_USER_ID;

    function handleSubmit(e){
        e.preventDefault();
        
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target,USER_ID)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        setformName('');
        setformEmail('');
        setformMsg('');

        setmsg(true);
    }

    return (
        <div className="contact" id="contact">
            <div className="top">
                <div className="contact_text">
                    <h1 className="heading">Contact</h1> 
                    <h2>Want to colab ?</h2>
                    <h2>You can write to me below</h2>
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
                <div className="left">
                    <form onSubmit={handleSubmit} className="contactform">
                        <input type="text" placeholder="Name" name="Name" required value={formName} onChange={(i)=>setformName(i.target.value)}/>
                        <input type="email" placeholder="Email" name="Email" required value={formEmail} onChange={(i)=>setformEmail(i.target.value)}/>
                        <textarea type="message" placeholder="Your message" name="Message" value={formMsg} className="messagebox" required onChange={(i)=>setformMsg(i.target.value)}/>
                        <button type="submit" className="submitbutton gradient">Send<SendIcon className="sendicon"/></button>
                        {msg && <span>Thanks I'll contact ASAP! </span>}
                    </form>
                </div>
                <div className="right">
                    <img src="assets\Mar-Business_18.svg" alt="" />
                </div>
            </div>
        </div>
    )
}
