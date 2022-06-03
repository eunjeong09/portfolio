import { FaGithub, FaRegIdCard, FaVimeo } from 'react-icons/fa';
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
    function goPage(e, page){
        e.preventDefault();
        
        let address='';
        if(page === 'notion'){
            address = 'https://www.notion.so/eunstudy/77c39fc1367e4f3890a2d2719b9e42b6';
        }else if(page === 'github'){
            address = 'https://github.com/eunjeong09';
        }else{
            address = 'https://velog.io/@eunjeong';
        }
        window.open(address, '_blank'); 
        

    }
    return(
        <div id="aboutMe">
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
                <div onClick={(e) => goPage(e, 'notion')}>
                    <p><FaRegIdCard /></p>
                    <span>Notion</span>
                </div>
                <div onClick={(e) => goPage(e, 'github')}>
                    <p><FaGithub /></p>
                    <span>GitHub</span>
                </div>
                <div onClick={(e) => goPage(e, 'velog')}>
                    <p><FaVimeo /></p>
                    <span>velog</span>
                </div>
            </div>
        </div>
    )
}
export default AboutMe;