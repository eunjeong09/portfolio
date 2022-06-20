import {FaMouse, FaGithub, FaRegIdCard, FaVimeo } from 'react-icons/fa';
import styled from 'styled-components';
import myImage from '../images/photo.jpg';
import { goPage } from '../utils/common';

const Photo = styled.div`
    border-radius:50%;
    background-image: url(${myImage});
    width: 260px;
    height: 260px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position:center;
    background-color: #fff;
    margin: 10% auto 20px;
`;

function Home() {
    return (
        <div id='home'>
            <Photo />
            <h2 className='inline bold'>고은정</h2>
            <h3><b>성장의 가치를 믿는</b> 프론트엔드 개발자입니다.</h3>
            <div className='flexBox iconList'>
                <div onClick={(e) => goPage(e, 'notion')}>
                    <p><FaRegIdCard /></p>
                </div>
                <div onClick={(e) => goPage(e, 'github')}>
                    <p><FaGithub /></p>
                </div>
                <div onClick={(e) => goPage(e, 'velog')}>
                    <p><FaVimeo /></p>
                </div>
            </div>
            <div className="iconList">
                {/* 깃, 벨로그,  */}
                {/* <FaVimeoV /> */}
            </div>

            <p className='transformText'>PORTFOLIO</p>
            <div className="bottomBox">
                <p>2022</p>
                <p>EUN_JEONG</p>
                <p>ejko0911@gmail.com</p>
            </div>

            <div className="scroll">
                <FaMouse />
                <p>Scroll Down</p>
            </div>
        </div>
    )
}
export default Home;