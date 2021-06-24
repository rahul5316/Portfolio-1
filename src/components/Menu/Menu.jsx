import "./menu.scss"

export default function Menu({openmenu,setopenmenu}) {
    return (
        <div className ={"menu " + (openmenu && "active")}>
            <ul>
                <li>
                    <a href="#intro" onClick={()=>setopenmenu(!openmenu)}>Intro</a>
                </li>
                <li>
                    <a href="#work" onClick={()=>setopenmenu(!openmenu)}>Work</a>
                </li>
                <li>
                    <a href="#contact" onClick={()=>setopenmenu(!openmenu)}>contact</a>
                </li>
            </ul>
            <a href='https://www.freepik.com/free-vector/illustration-e-mail-protection-concept-e-mail-envelope-with-file-document-attach-file-system-security-approved_13744792.htm' className="credits">Vector Art credits</a>
        </div>
    )
}
