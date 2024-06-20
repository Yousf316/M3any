
import styles from "./CardAdkharS.module.css"
import PropTypes from 'prop-types'
import  { useState ,useRef} from 'react';





function Card({Title ="اسم " ,Count =1,Description="", Link =""})
{
    const [count,setCount] =useState(Count);
    
    const btnPreves = useRef(null)


    function handleDecremnt()
    {
        if(count >1){
        setCount(precount => precount-=1);}
    else{
    btnPreves.current.style.backgroundColor = "#bdbdbdb2" ;

    if(count ===1)
        {
            setCount(precount => precount-=1);

        }

    }
    }

  

    return(

        <div className={styles['Card-info']}>
          
            <h1>{Title}</h1>
            <hr />
            <p className={styles.description}>{Description}</p>
            <hr />
           <button className={styles["counter-buttom"]}  ref={btnPreves} onClick={() => handleDecremnt()}>{count}</button>
        </div>
    )

}
Card.propTypes ={
   
    Title: PropTypes.string,
     Description: PropTypes.string,
    Link: PropTypes.number,
    Count: PropTypes.number,
}



export default Card