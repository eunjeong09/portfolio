import { FaGithub, FaRegIdCard, FaPhoneAlt, FaRegEnvelope} from 'react-icons/fa';
import styled from 'styled-components';
import myImage from '../images/photo.jpg';

const Photo = styled.div`
    border-radius:50%;
    background-image: url(${myImage});
    width: 160px;
    height: 160px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position:center;
`;

function AboutMe(){
    return(
        <div className="aboutMe">
            <h2>About Me</h2>
            <div className="leftArea">
                <Photo />
            </div>
            <div className="rightArea">
                <div className="bubble">
                    ------프론트엔드 개발자입니다.<br/>
                    --<br/>
                    --<br/>
                    --<br/>
                </div>
            </div>
            <div className='flexBox'>
                <div>
                    <p><FaPhoneAlt /></p>   
                    <span>010-9985-6676</span>
                </div>
                <div>
                    <p><FaRegEnvelope /></p>
                    <span>ejko0911@gmail.com</span>
                </div>
                <div>
                    <p><FaRegIdCard /></p>
                    <span>Notion</span>
                </div>
                <div>
                    <p><FaGithub /></p>
                    <span>GitHub</span>
                </div>
            </div>
        </div>
    )
}
export default AboutMe;