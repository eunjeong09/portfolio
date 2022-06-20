import { FaGithub, FaRegIdCard, FaVimeo } from 'react-icons/fa';
import styled from 'styled-components';
import myImage from '../images/photo.jpg';
import { goPage } from '../utils/common';

const Photo = styled.div`
    border-radius:50%;
    background-image: url(${myImage});
    width: 220px;
    height: 220px;
    background-color: #fff;
    background-repeat: no-repeat;
    background-size: contain;
    background-position:center;
    display: inline-block;
    margin-bottom: 30px;
`;

function AboutMe(){
    return(
        <div id="aboutMe">
            <h2>About Me</h2>
            <Photo />
            <div className="rightArea">
                <div className="bubble bgColor3">
                    ------프론트엔드 개발자입니다.<br/>
                    --<br/>
                    --<br/>
                    --<br/>
                </div>
            </div>
            <div className='flexBox'>
                <div onClick={(e) => goPage(e, 'notion')}>
                    <p><FaRegIdCard /></p>
                    <span className='bold'>Notion</span>
                </div>
                <div onClick={(e) => goPage(e, 'github')}>
                    <p><FaGithub /></p>
                    <span className='bold'>GitHub</span>
                </div>
                <div onClick={(e) => goPage(e, 'velog')}>
                    <p><FaVimeo /></p>
                    <span className='bold'>velog</span>
                </div>
            </div>
        </div>
    )
}
export default AboutMe;