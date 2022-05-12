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
                <img src="../images/photo.jpg"/>
            </div>
            <div className="rightArea">
                <div className="box">
                    간단한 설명?
                </div>
            </div>
        </div>
    )
}
export default AboutMe;