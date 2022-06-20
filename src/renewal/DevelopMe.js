import styled from 'styled-components';
import webDesignImage from '../images/webDesign.png';
import mediumImage from '../images/medium.png';
import velogImage from '../images/velog.png';
import myportImage from '../images/myport.png';


const WebDesign = styled.div`
    background-image: url(${webDesignImage});
    width: 300px;
    height: 100px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position:center;
    margin: 0 auto;
    `;
const Medium = styled.div`
    background-image: url(${mediumImage});
    width: 400px;
    height: 200px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position:center;
    margin: 0 auto;
    `;
const Velog = styled.div`
    background-image: url(${velogImage});
    width: 400px;
    height: 200px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position:center;
    margin: 0 auto;
    `;
const Myport = styled.div`
    background-image: url(${myportImage});
    width: 400px;
    height: 170px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position:center;
    margin: 0 auto;
    `;

function Develop() {
    return (
        <div id="develop">
            <h2 className='medium'>Develop</h2>
            <div className="leftArea">

                <div className='colorBox'>
                    <h3 className='medium bgColor4'>Blog</h3>
                    <Medium />
                    <Velog />
                    <ul className="dash">
                        <li>Medium 일주일 통계</li>
                        <li>Velog 주간 순위 1위</li>
                    </ul>
                </div>


            </div>
            <div className="rightArea">
                <div className='colorBox'>
                    <h3 className='medium bgColor4'>License</h3>
                    <WebDesign />
                    <ul className="dash">
                        <li>웹디자인 기능사 자격증 취득</li>
                    </ul>
                </div>
                <div className='colorBox'>
                    <h3 className='medium bgColor4'>Study</h3>
                    <Myport />
                    <ul className="dash">
                        <li>개발자 커뮤니티를 통해 협업 스터디 진행</li>
                        <li>인스타그램 클론코딩을 바탕으로 마이포폴그램 개발중</li>
                        <li>Vue.js를 사용한 프론트엔드 개발</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Develop;