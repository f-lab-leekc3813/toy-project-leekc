
import {useRecoilState} from 'recoil';
import { useNavigate } from 'react-router-dom';

import HeaderUI from "./header.presenter";
import { loginState } from "../../store/recoilAtoms";
import { userState } from '../../store/recoilAtoms';
import axios from 'axios';

export default function Headers() {
    const [isLogged, setIsLogged] = useRecoilState(loginState);
    const [user, setUser] = useRecoilState(userState);

    const navigate = useNavigate();

    const onClickLogin = () => {
        navigate("/login")
    }

    const onClickMain = () => {
        navigate("/")
    }

    const handleLogout = async ()  => {
        try{
            const response = await axios.post('http://localhost:8080/user/logout')
            if (response.status === 200){
                console.log('로그아웃 완료')
                setIsLogged(false)
                setUser((prevUser) => ({
                    ...prevUser,
                    email: '',
                    nickName: '',
                }))
            }else{
                console.log('로그아웃 실패s')
            }
            
        }catch(error){
            console.log('error', error)
        }
    }

    const moveCategories = () => {
        navigate("/categories")
    }

    return (
            <HeaderUI
                onClickMain = {onClickMain}
                onClickLogin = {onClickLogin}
                handleLogout = {handleLogout}
                moveCategories = {moveCategories}
                isLogged = {isLogged}
            />
    )
}