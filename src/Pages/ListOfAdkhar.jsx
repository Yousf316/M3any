import { useParams } from "react-router-dom";
import Card from "../Component/CardAdkhar/CardAdkhar";
import data from '../../data/adkar.json'
import  { useState} from 'react';



function ListContect() {
    const { id } = useParams();
    
    // Correctly placed console.log
    const [AdkharList, setAdkharList] = useState(data["Adkhar"][(Number.parseInt(id))])

    return (
        <>
        <h1>{AdkharList[0].category}</h1>
        {AdkharList.map((Contect,index) => (
            <Card
              key={index}
              Description={Contect.description}
              Count={(Number.parseInt(Contect.count))}
              Title={Contect.content}
            />
          ))}
        
        </>
    );
}


export default ListContect;