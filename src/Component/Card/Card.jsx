
import styles from "./CardS.module.css"
import PropTypes from 'prop-types'

function Card({ Title = "اسم", Link = "" }) {
  return (
    <div className={styles['Card-info']}>
      <a href={`/M3any/name/${Link}`}>
        <h1>{Title}</h1>
      </a>
    </div>
  );
}

Card.propTypes ={
    image: PropTypes.string ,
    Title: PropTypes.string,
    // Description: PropTypes.string,
Link: PropTypes.string,
}



export default Card