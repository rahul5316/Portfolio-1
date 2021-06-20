import "./Projects.scss"
import PortfolioList from "../PortfolioList/PortfolioList";
import { useEffect,useState } from "react";
import { featuredport,datascienceport,appsport,otherport} from "../../data";


export default function Projects() {

    const [selected, setselected] = useState("featured");
    const [data, setdata] = useState([]);

    const itemlist = [
        { id:"featured",title:"Featured"},
        { id:"datascience",title:"Data Science"},
        { id:"apps",title:"Apps"},
        { id:"others",title:"Others"}
    ];

    useEffect(() => {
        switch (selected) {
            case "featured":
                setdata(featuredport)
                break;
            case "datascience":
                setdata(datascienceport)
                break;
            case "apps":
                setdata(appsport)
                break;
            case "others":
                setdata(otherport)
                break;
            default:
                setdata(featuredport)
        }

    }, [selected])

    return (
        <div className = "projects" id="projects">
            <h1>Projects</h1>
            <ul>
                {itemlist.map(element => {
                    return <PortfolioList title={element.title} active={selected===element.id} 
                                        SetSelected={setselected}
                                        Id={element.id}/>
                })}
            </ul>
            <div className="container">
                {data.map(proj => {
                    return(<div className="item">
                                <img src={proj.img} alt="" />
                                <h3>{proj.title}</h3>
                            </div>);
                })}
            </div>
        </div>
    )
}
