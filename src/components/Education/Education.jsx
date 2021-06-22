import "./Education.scss"
import { useState } from "react";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

export default function Education() {
    const [slider, setslider] = useState(0);

    const EduData = [
        {
            id:'college',
            title:'CSE Undergrad @IIITD',
            img: 'assets/IIITD.jpg',
            year:'2018-Present'
        },
        {
            id:'jrcollege',
            title:'LBS RK puram',
            img: 'assets/LBS.jpg',
            year:'2016-2018'
        },
        {
            id:'school',
            title:'Gowtham International School',
            img: 'assets/GIS.png',
            year: '2012-2016'
        },
    ]

    const navi = (dir)=>{
        if (slider===0 && dir===-1) setslider(2);
        else setslider((slider+dir)%3);
    }

    return (
        <div className="Education" id='edu'>
            <h1>Education</h1>
            <div className="slider" style={
                {transform:`translateX(-${slider * 100}vw)`,}}>
                {EduData.map((data)=>{
                    return (<div className="container">
                        <div className="item">
                            <div className="imgcontainer">
                                <img src={data.img} alt="" />
                            </div>
                            <div className="paneltitle">
                                <h2>{data.title}</h2>
                                <h3>{data.year}</h3>
                            </div>
                        </div>
                    </div>)
                })}
            </div>
            <div className=" navigation leftarrow" onClick={()=>navi(-1)}>
                <NavigateBeforeIcon className='leftarrow-icon' style={{fontSize:80}}/>
            </div>
            <div className="navigation rightarrow" onClick={()=>navi(1)}>
                <NavigateNextIcon className='rightarrow-icon' style={{fontSize:80}}/>
            </div>
        </div>
    )
}
