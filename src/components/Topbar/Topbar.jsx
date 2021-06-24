import "./Topbar.scss"
import EmailIcon from '@material-ui/icons/Email';

export default function Topbar({openmenu,setopenmenu}) {
    return (
        <div className={"topbar " + (openmenu && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Anshul</a>
                    <div className="itemcontainer">
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
