import React ,{useEffect} from "react";
import styles from './CardMenu.module.css';
import PropTypes from 'prop-types';



function CardMenu({Title ="اسم " , Link =""})
{

    return(

        <div className={styles['Card-info']  }>
           

            <a  href={'/M3any/Adkhar/'+Link}  ><h1>{Title}</h1></a>
            
            
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