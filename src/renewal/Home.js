import { FaGithub, FaVimeoV, FaRegIdCard, FaMouse } from 'react-icons/fa';
import styled from 'styled-components';
import myImage from '../images/photo.jpg';

const Photo = styled.div`
    border-radius:50%;
    background-image: url(${myImage});
    width: 260px;
    height: 260px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position:center;
    margin: 0 auto;
`;

function Home() {
    return (
        <div id='home'>
            <Photo />
            <h2>고은정</h2>
            <h3><b>성장하는</b> 프론트엔드 개발자입니다.</h3>
            <div className="iconList">
                {/* 깃, 벨로그,  */}
                <FaRegIdCard />
                <FaGithub />
                <FaVimeoV />
            </div>

            <div className="scroll">
                <FaMouse />
                <p>Scroll Down</p>
            </div>
        </div>
    )
}
export default Home;