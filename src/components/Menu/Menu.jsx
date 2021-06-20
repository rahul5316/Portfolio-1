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
        </div>
    )
}
