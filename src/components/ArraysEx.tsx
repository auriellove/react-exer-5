import "./ArraysEx.css"
import { useState } from "react"
import { nanoid } from "nanoid" 


export interface Pet {
    name: "string",
    type: "string",
    id: number
}


export default function ArraysEx () {

    // const colors = ["red", "orange", "yellow"]
    const [colors, setColors] = useState([
        {color: "red"},
        {color: "orange"},
        {color: "yellow"}
    ])

    const pets = [
        {name: "patches", type: "shitzu-bishon", id: nanoid},
        {name: "jewels", type: "bulldog", id: nanoid},
        {name: "paulie", type: "shitzu-bishon", id: nanoid},
    ]


//FIGURE OUT COMPONENT C
    // setColors(prev => {
    //     const newColor = prev.slice(0);
    //     newColor[""] = newItem;
    //     return newColor
    // })
    // {colors.map(Color => <li key={Color}>{Color}</li>)}
    return (
    <div> <h2> Colors </h2>
    
    <ol>    
        <ol>
            
            {colors.map(Color => <li key={Color}>{Color}</li>)}
        </ol>

    </ol>


    <div>
        <button> Add Green </button>
        <button> Add Blue </button>
        <button> Add Violet </button>
    </div>

    <div>
        {pets.map(petss => 
            <Petss key={petss.id}
                 name={petss.name}
                 type={petss.type}
                 id={petss.id}/>)}
    </div>
    </div>

    

    

)}