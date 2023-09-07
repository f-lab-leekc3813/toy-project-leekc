import NavigationPageUI from "./navigation.presenter";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NavigationPage() {
    const [navigationInfo, setNavigationInfo] = useState([]);

    const navigate = useNavigate();

    useEffect(() =>{
        const fetchData = async() => {
            try{
                const response = await axios.get('http://localhost:8080/navigation/info')
                const data = response.data;

                console.log(response)
                setNavigationInfo(data)
            }catch(error){
                console.log(error)
            }   
        }
        fetchData();
    }, [])

    return (
        <NavigationPageUI
            navigationInfo = {navigationInfo}
         />
    )
}