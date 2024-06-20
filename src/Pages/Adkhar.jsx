
import CardMenu from "../Component/CardMenu/CardMenu";
import dataNames from "../../data/adkar.json"
import  { useState} from 'react';

function AdkharMenu() {
    
    
    // Correctly placed console.log
    
    const [countCategory, setcountCategory] = useState(dataNames.Adkhar.length);

   function GetCatgoryname(index)
   {
    
    
    return dataNames.Adkhar[index][0].category
      
   }
    
        //const data = dataNames;
    
  
    
  
 

    return (
        <>
        
        {(() => {
        let rows = [];
        for (let i = 0; i < countCategory; i++) {
          rows.push(<CardMenu Title={GetCatgoryname(i)} key={i} Link={i}/>);
        }
        return rows;
      })()}


         
        </>
    );
}


export default AdkharMenu;