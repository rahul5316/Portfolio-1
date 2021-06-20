const all_projects = [
    {
        title:'Rain Prediction',
        id:"rainprediction",
        img: "assets\\delhi_rain.jpg"
    },
    {
        title:'Feature Extraction using CNN',
        id:"cnnfeatures",
        img: "assets\\CNN.jpeg"
    },
    {
        title:'Course Webpage automation',
        id:"backpackauto",
        img: "assets\\delhi_rain.jpg"
    },
    {
        title:'PvZ using Java',
        id:"pvzjava",
        img: "assets\\delhi_rain.jpg"
    },
    {
        title:'Solving a 2x2x2 cube',
        id:"cubesolver",
        img: "assets\\delhi_rain.jpg"
    },
    {
        title:'Portfolio Website',
        id:"portofoliowebsite",
        img: "assets\\delhi_rain.jpg"
    },
];

function add_info(portlist){
    console.log("add_info function called!!");
    var ans = [];
    portlist.forEach((element_id)=>{
        all_projects.forEach((element)=>{
            if (element.id===element_id){
                ans.push(element);
            }
        })
    });
    console.log(ans);
    return ans
}

export const featuredport = add_info(["rainprediction",
                                    "portofoliowebsite"]);

export const datascienceport = add_info(["rainprediction",
                                    "cnnfeatures"]);

export const appsport = add_info(["pvzjava",
                                "portofoliowebsite"]);

export const otherport = add_info(["backpackauto",
                                    "cubesolver"]);