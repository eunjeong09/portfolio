import { FaGithub, FaPhoneAlt, FaVimeoV, FaEnvelope, FaChild } from 'react-icons/fa';
import styled from 'styled-components';
import photoImage from '../images/eunjeong.png';
const icons = {
    verticalAlign:"bottom"
}
const photo = {
    width:"170px",
    height:"150px"
}
function Main() {
    return (
        <div>
            <p>어쩌구 저쩌구 프론트엔드 개발자 <h1>고은정</h1>입니다.</p>
            
            <img style={photo} src={photoImage} />
            <p><FaChild style={icons}/> 1996.09.06</p>
            <p><FaPhoneAlt style={icons}/> 010-9985-6676</p>
            <p><FaEnvelope style={icons}/> ejko0911@gmail.com</p>
            <p><FaGithub style={icons}/> https://github.com/eunjeong09</p>
            <p><FaVimeoV style={icons}/> https://velog.io/@eunjeong</p>
        </div>

        // 블로그 이메일 링크
    )
}
export default Main;