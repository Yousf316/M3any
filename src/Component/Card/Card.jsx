
import styles from "./CardS.module.css"
import PropTypes from 'prop-types'

function Card({Title ="اسم المانجا" , Link =""})
{

    return(

        <div className={styles['Card-info']  }>
            <br />
            <br />
            <br />
            <br />
            <br />

            <a  href={'/M3any/name/'+Link} target="_blank" ><h1>{Title}</h1></a>
            
            {/* <h2 className={styles.title}> {Title}</h2> */}
           
            {/* <p className={styles.description}> {Description}</p> */}
        </div>
    )

}
Card.propTypes ={
    image: PropTypes.string ,
    Title: PropTypes.string,
    // Description: PropTypes.string,
    Link: PropTypes.number,
}



export default Card