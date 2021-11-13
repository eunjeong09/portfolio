import { FaGithub, FaPhoneAlt, FaVimeoV, FaEnvelope, FaChild } from 'react-icons/fa';
import styled from 'styled-components';
import photoImage from '../images/eunjeong.png';
const icons = {
    verticalAlign:"bottom"
}
const Photo = styled.div`
    // width:"300px";
    // height:"260px";
    border: 3px solid #000;
    border-radius:50%;
    background-image: url(${photoImage});
    width: 260px;
    height: 260px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position:right;

`;

function Main() {
    return (
        <div>
            {/* <div style={{width:"50%",float:"left"}}>
                <img style={photo} src={photoImage} />
            </div> */}

            {/* <div style={{backgroundImage: `url(${require("../images/eunjeong.png").default})`}}></div> */}

            <Photo></Photo>

            <p>어쩌구 저쩌구 <br />프론트엔드 개발자 <strong>고은정</strong>입니다.</p>
            
            <div>
                <p><FaChild style={icons}/> 1996.09.06</p>
                <p><FaPhoneAlt style={icons}/> 010-9985-6676</p>
                <p><FaEnvelope style={icons}/> ejko0911@gmail.com</p>
                <p><FaGithub style={icons}/> https://github.com/eunjeong09</p>
                <p><FaVimeoV style={icons}/> https://velog.io/@eunjeong</p>
            </div>
        </div>

        // 블로그 이메일 링크
    )
}
export default Main;