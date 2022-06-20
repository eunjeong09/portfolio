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
                    개발자라는 직업에 대해 고민하며 공부하는
                    <b>프론트엔드 개발자</b> 고은정입니다.<br/><br/>

                    새로운 분야, 기술에 대한 <b>도전과 학습</b>을 좋아하고, 주어진일에 <b>책임감이 강한</b>성격을 가지고 있습니다.<br />
                    <b>서비스로 인한 편리함과 즐거움</b>을 개발의 목적이라고 생각합니다.<br />
                    서비스를 함께 만들어가는 <b>협업</b>을 중요하게 생각하고, '함께 일하고 싶은 사람'이 되기 위해 노력합니다.<br/>
                    밝은 성격과 낮은 웃음 장벽으로 새로운 환경에 적응하는데 어려움이 적습니다.<br /><br />
                    아래 링크를 클릭해서 저의 성장을 둘러봐주세요!

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