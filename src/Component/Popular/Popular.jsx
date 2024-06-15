import  { useState, useEffect ,useRef} from 'react';
import Card from '../Card/Card';
import Styles from "./Popular.module.css"
import dataNames from "../../../data/Names_Of_Allah.json"


function CheckbtnPrevese (pagenumber,btnref)
{
  
  pagenumber >1? btnref.current.style.backgroundColor = "":btnref.current.style.backgroundColor = "#bdbdbdb2" ;
}

function Popular  () {
  const [animeList, setAnimeList] = useState([]);
  const [pagenumber, setpagenumber] = useState(1);

  

  useEffect(() => {
    
        const data = dataNames;
        setAnimeList(data);
      
  
    
  
  }, [pagenumber]);

 
  return (
    <>
    <div>
       {animeList.map(anime => (
        <Card
          key={anime.id}
          // image={anime.images.jpg.image_url}
          Link={anime.id}
          Title={anime.name}
        />
      ))}
      
     </div>
    </>
  );
}

export default Popular;
