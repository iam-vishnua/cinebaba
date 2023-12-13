import React from "react";
import { useState } from "react";
import Movies from "../components/Movies/Movies";
function Home(){const[movies,setmovies]=useState([
    {
      image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4zLzEwICAxMi4zSyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00370432-xebnbplscs-portrait.jpg",
      title:"kannur squad",
      category:"action/crime/drama"
    },
    { image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ni8xMCAgNS4xSyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00365489-ccwqagabyn-portrait.jpg",
    title:"Iraivan",
    category:"psychological/crime/thriller"

    },
    { 
    image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-NS42LzEwICAxOC40SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00341436-msmyjsjspw-portrait.jpg",
    title:"chandramukhi2",
    category:"horror/comedy"

    },
    { 
      image:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4xLzEwICBFYXJseSBSYXRpbmdz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00370560-stduurrdvt-portrait.jpg",
      title:"chitta",
      category:"family/drama/comedy"
  
      }
      
    


  ])

    return(

        <main>
    
    <div className='heading'><h2>Recommended Movies</h2></div>
    <ul className='movielists'>
     {
      movies.map((item)=>{
        return <Movies  object={item}/>
      }
      
      
      )
     }
      
      
</ul>
      

    </main>
    
    )

}
export default Home;