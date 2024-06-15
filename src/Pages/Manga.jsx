import { useParams } from "react-router-dom";
import CardInfo from "../Component/CardInfo/CardInfo";

function Manga() {
    const { id } = useParams();
    
    // Correctly placed console.log
    

    return (
        <>
            <CardInfo nameid={id} />
        </>
    );
}


export default Manga;