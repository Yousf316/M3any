import  { useState, useEffect ,useRef} from 'react';
import Card from '../Card/Card';
import Styles from "./ListNames.module.css"
import dataNames from "../../../data/Names_Of_Allah.json"




function ListNames  () {
  const [NamesList, setNamesList] = useState([]);
  const [pagenumber, setpagenumber] = useState(1);

  

  useEffect(() => {
    
        const data = dataNames;
        setNamesList(data);
      
  
    
  
  }, [pagenumber]);

 
  return (
    <>
    <div className={Styles.container} translate="no">
  {NamesList.map(Name => (
    <Card
      key={Name.id}
      Link={Name.id}
      Title={Name.name}
    />
  ))}
</div>

    </>
  );
}

export default ListNames;
