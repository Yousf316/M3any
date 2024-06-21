
import CardMenu from "../../Component/CardMenu/CardMenu";
import dataNames from "../../../data/adkar.json"
import  { useState} from 'react';
import Style from './Adkharstyle.module.css'
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
        <div className={Style["continer-div"]} >
        {(() => {
        let rows = [];
        for (let i = 0; i < countCategory; i++) {
          rows.push(<CardMenu Title={GetCatgoryname(i)} key={i} Link={i}/>);
        }
        return rows;
      })()}
</div>

         
        </>
    );
}


export default AdkharMenu;