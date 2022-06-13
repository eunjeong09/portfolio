import styled from 'styled-components';
import webDesignImage from '../images/webDesign.png';


const WebDesign = styled.div`
    background-image: url(${webDesignImage});
    width: 300px;
    height: 100px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position:center;

`;

function Develop() {
    return (
        <div className="develop">
            <h2>Develop</h2>
            <div className="leftArea">

                <h4>Blog</h4>
                <WebDesign />
                <WebDesign />
                <ul className="dash">
                    <li>Medium 일주일 통계</li>
                    <li>Velog 주간 순위 1위</li>
                </ul>

            </div>
            <div className="rightArea">
                <h4>License</h4>
                <WebDesign />
                <ul className="dash">
                    <li>웹디자인 기능사 자격증 취득</li>
                </ul>
                <h4>Study</h4>
                <WebDesign />
                <ul className="dash">
                    <li>인스타그램 클론코딩을 바탕으로 마이포폴그램 개발중</li>
                    <li>Vue.js를 사용한 프론트엔드 개발</li>
                    <li>노션을 사용한 일정관리</li>
                </ul>

            </div>


        </div>
    )
}
export default Develop;