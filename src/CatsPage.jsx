import React, { useEffect, useState } from "react";
import axios from "axios";

function CatsPage(){
    const [cat, setCat] = useState(null)
    useEffect(()=>{
        axios.get(`https://api.thecatapi.com/v1/images/search?limit=10`)
            .then(response => {
                console.log(response.data);
                setCat(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [] );

    if (!cat){
        return(
            <h2>Carregando..</h2>
        )
    }

    return(
        <div>
            {
                cat.map(cat =>(
                    <img width="50px" height="50px" src={cat.url} alt=""/>
                ))
            }
           

        </div>
    );
}
export default CatsPage;