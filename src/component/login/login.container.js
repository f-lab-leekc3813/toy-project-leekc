import { useState} from "react";
import {useRecoilState} from 'recoil';
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { loginState } from "../../store/recoilAtoms";
import { userState } from "../../store/recoilAtoms";
import LoginPageUI from "./login.presenter";

export default function LoginPage() {
    const navigate = useNavigate();  
    const [isLogged, setIsLogged] = useRecoilState(loginState);
    const [user,setUser] = useRecoilState(userState);

    const [login,setLogin] = useState(false);

    const [nickName,setNickName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    const onClickSignUp = () => {
        setLogin((prev) => !prev)
    }

    const onClickSign = async ()  => {
            try{
              const response = await axios.post('http://localhost:8080/user/signup', {
                nickName,
                email,
                password,
              });
              console.log(response);
              if (response.status === 200) {
                setLogin((prev) => !prev);
                setNickName('');
                setEmail('');
                setPassword('');
                setIsLogged(true)
                alert('축하합니다!! 회원가입이 완료되었습니다!');
                navigate("/");
              }else if(response.status === 203){
                alert('잘못된 이메일 형식입니다')
              }else if(response.status === 204){
                alert('잘못된 닉네임 형식입니다')
              }else if(response.status === 205){
                alert('잘못된 패스워드 형식입니다')
              }else{
                alert("서버에러")
              }
              
            }catch(error){
              console.log('Error', error);
              alert('에러가 발생하였습니다.')
            } 
          } 

    const onClickLogin = async () => {
        try{
          const response = await axios.post('http://localhost:8080/user/login', {
            email,
            password,
          });
          if(response.status === 200) {
            // 서버에서 전달된 세션 ID를 쿠키로 저장
            console.log('response: ',response)
            document.cookie = `sessionID=${response.data.data.cookie}`;
            setIsLogged(true)
            const res = await axios.post('http://localhost:8080/user/nickName', {
              email
            })
            console.log(document.cookie)
            console.log('Login success:', response, res);
            navigate("/");
          }
        }catch(error) {
          console.error('Login error:', error);
        }
    }

    const handleEmailChange = (event )  => {
        const newEmail = event.target.value;
        setEmail(newEmail);
    };
    
    const handlePasswordChange = (event)  => {
        const newPassword = event.target.value;
        setPassword(newPassword);
    };

    const handleNickNameChange = (event) => {
        const newNickName = event.target.value;
        setNickName(newNickName);
    };

    return(
        <LoginPageUI
            login = {login}
            onClickSignUp = {onClickSignUp}
            onClickSign = {onClickSign}
            handleEmailChange ={handleEmailChange}
            handlePasswordChange = {handlePasswordChange}
            handleNickNameChange = {handleNickNameChange}
            setNickName = {setNickName}
            setEmail = {setEmail}
            setPassword = {setPassword}
            onClickLogin = {onClickLogin}
         />
    )
}