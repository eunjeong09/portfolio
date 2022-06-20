import { FaGithub, FaRegIdCard, FaVimeo } from 'react-icons/fa';
import styled from 'styled-components';
import myImage from '../images/eunjeong2.jpeg';
import { goPage } from '../utils/common';

const Photo = styled.div`
    border-radius:50%;
    background-image: url(${myImage});
    width: 220px;
    height: 220px;
    background-color: #fff;
    background-repeat: no-repeat;
    background-size: cover;
    background-position:center;
    display: inline-block;
    margin-bottom: 30px;
    border: 5px solid #293462;
`;

function AboutMe(){
    return(
        <div id="aboutMe">
            <h2 className='medium'>About Me</h2>
            <Photo />
            <div className="rightArea">
                <div className="bubble bgColor3">
                    개발자라는 직업에 대해 고민하며 공부하는<br/>
                    프론트엔드 개발자 고은정입니다.<br/><br/>
                    -adsfadfadfsadf 3~4줄 fadfasfsadfas-<br/>
                    -adsfadfadfsadfadfadfadfasfsadfas-<br/>
                    -adsfadfadfsadfadfadfadfasfsadfas-<br/>
                    -adsfadfadfsadfadfadfadfasfsadfas-<br/>
                    -adsfadfadfsadfadfadfadfasfsadfas-<br/>
                </div>
            </div>
            <div className='flexBox'>
                <div onClick={(e) => goPage(e, 'notion')}>
                    <p><FaRegIdCard /></p>
                    <span className='medium'>Notion</span>
                </div>
                <div onClick={(e) => goPage(e, 'github')}>
                    <p><FaGithub /></p>
                    <span className='medium'>GitHub</span>
                </div>
                <div onClick={(e) => goPage(e, 'velog')}>
                    <p><FaVimeo /></p>
                    <span className='medium'>velog</span>
                </div>
            </div>
        </div>
    )
}
export default AboutMe;