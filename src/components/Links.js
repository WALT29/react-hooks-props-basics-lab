import React from "react";

// function socials(links){
//     return links.forEach((element)=> <a  key={element} href={element}>{element}</a>)
// }

// function Socials(element){
//     return(
//         <a key={element} href={element}>{element}</a>
//     )
// // }

function Links({linkedin,github}){
   // console.log(props.links.github);
   // const {link}=props
    //console.log(links);
   // const link=links.map((element)=><Socials element={element}/>)

    return(
        <div>
            <h3>Links</h3>
         {/* {link} */}
         <a href={github}>{github}</a>
         <a href={linkedin}>{linkedin}</a>
        </div>
    )
}

export default Links