import "./Topbar.scss"
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

export default function Topbar({openmenu,setopenmenu}) {
    return (
        <div className={"topbar " + (openmenu && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Anshul</a>
                    <div className="itemcontainer">
                        <PhoneIcon className="icon"/>
                        <span>+91-9811132753</span>
                        <EmailIcon className="icon"/>
                        <span>anshulraj9823@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setopenmenu(!openmenu)}>
                        <span className="line1"></span>
                        <span className="line2"></span>    
                        <span className="line3"></span>
                    </div> 
                </div>
            </div>
        </div>
    )
}
