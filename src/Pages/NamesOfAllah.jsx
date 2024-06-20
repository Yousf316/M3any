import { useParams } from "react-router-dom";
import CardInfo from "../Component/CardInfo/CardInfo";

function NmaeContect() {
    const { id } = useParams();
    
    // Correctly placed console.log
    

    return (
        <>
            <CardInfo nameid={id} />
        </>
    );
}


export default NmaeContect;