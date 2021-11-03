import { FaGithub, FaPhoneAlt, FaVimeoV, FaEnvelope, FaChild } from 'react-icons/fa';
import styled from 'styled-components';
import photoImage from '../images/eunjeong.png';
const icons = {
    verticalAlign:"bottom"
}
const photo = {
    width:"270px",
    height:"250px"
}

function Main() {
    return (
        <div>
            <div style={{width:"50%",float:"left"}}>
                <img style={photo} src={photoImage} />
            </div>
            <p>어쩌구 저쩌구 <br />프론트엔드 개발자 <strong>고은정</strong>입니다.</p>
            
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