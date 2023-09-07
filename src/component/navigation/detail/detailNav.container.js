import DetailNavPageUI from "./detailNav.presenter";
import { useNavigate } from "react-router-dom";

export default function DetailNavPage(props){
    const navigate = useNavigate();
    const onClickNavigation = (event) => {
        navigate(`/${event.target.id}`)
    }

    return(
        <DetailNavPageUI 
            title = {props.title}
            image = {props.image}
            onClickNavigation = {onClickNavigation}
        />
    )
}