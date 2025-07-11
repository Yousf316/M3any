import React ,{useEffect} from "react";
import styles from './CardMenu.module.css';
import PropTypes from 'prop-types';



function CardMenu({Title ="اسم " , Link =""})
{

    return(

        <div className={styles['Card-info']  }>
           

           <h1 className={styles.title}>
  <a href={`/M3any/Adkhar/${Link}`}>{Title}</a>
</h1>

            
            
        </div>
    )

}
CardMenu.propTypes ={
    image: PropTypes.string ,
    Title: PropTypes.string,
    // Description: PropTypes.string,
    Link: PropTypes.number,
}



export default CardMenu