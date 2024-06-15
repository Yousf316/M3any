import React ,{useEffect} from "react";
import styles from './CardInfo.module.css';
import PropTypes from 'prop-types';
import dataname from '../../../data/Names_Of_Allah.json'
 function CardInfo({nameid='1'})

{
   

    //state
    const [nameg, setnameg] = React.useState({})
    
    const [showMore, setShowMore] = React.useState(false)

    //destructure nameg
    const {
      id,name,text } = nameg

    //get nameg based on id
    const getname = async (nameg) => {
       
        const data =  dataname.filter(p => p.id == nameid);
        console.log(data);
        setnameg(data[0])
    }
    useEffect(() => {
        getname(nameid);
    }, [])
    return(
        <>
        <div className={styles["details"]}>
                <div className={styles["detail"]}>
                <h1>{name}</h1>
                   
                    
                </div>
                <p className={styles["description"]}>
                    {showMore ? text : text?.substring(0, 450) + '...'}
                    <br />
                    <button onClick={() => {
                        setShowMore(!showMore)
                    }}>{showMore ? 'Show Less': 'Read More'}</button>
                </p>
            </div>
        </>
    )
}
CardInfo.propTypes ={
   
    nameid: PropTypes.string,
}
export default CardInfo