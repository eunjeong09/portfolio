import styled from "styled-components";

const CircleWrap = styled.div`
    position:absolute;
    top:53%;
    left:50%;
    transform:translate(-50%,-50%);
    .circle{
        width:20px;
        height:20px;
        border-radius:50px;
        background-color:purple;
        margin:60px;
        position:relative;
        &:after{
            content: '';
            position: absolute;
            border: 2px dotted;
            top: 21px;
            left: 50%;
            transform: translate(-50%, 0px);
            height: 60px;
        }
    }
    .circle:last-child{
        &:after{
            content:none;
        }
    }
`;

// 말풍선이 필요할까..?
// const textBox = styled.div`
//     position:relative;
//     background:green;
//     width:20px;
//     height:10px;
//     .left::after{
//         width:2px;
//         height:2px;
//         background:red
//     }
// `;

const LeftArea = styled.div`{width:50%;float:left}`;
const RightArea = styled.div``;
const Title = styled.p`
    font-size:20px;
    font-weight:bold;
    color:#6a00ff;
    margin-bottom:5px;
    }
    
`;


function Experience() {
    return (
        <div>
            <h1>Experience</h1>
            <p>
                <Title className="right">2019.02</Title>
                <span>대전대학교 회계학과, 전자정보통신공학과 졸업</span>
                <div>
                    <ul>
                        <li>교내 캡스톤디자인 경진대회 대상<br/>장애인 주차구역</li>
                        <li>교내 창업동아리 공모전 참가<br/>소외된, 경진대회</li>
                        <li>ICT 학점연계 인턴십</li>

                    </ul>
                </div>
            </p>
            <p>
                <Title>2018.08 ~ 2019.03</Title>
                <span>(주)플랜아이 퍼블리셔 인턴 및 수습</span>
                <div>
                    <ul>
                        <li>약 15개 프로젝트 보조</li>
                        <li>한국정직운동본부 작업</li>
                    </ul>
                </div>
            </p>
            <p>
                <Title>2019.05 ~ 2019.12</Title>
                <span>대전 인재개발원 전자정보통신sw프레임워크 과정 수료</span>
                <div>
                    <ul>
                        <li>몇시간 동안 수요했는지, 3개의 프로젝트</li>
                        <li>자세히 버튼을 클릭해서 포트폴리오로? 연결되도록?</li>
                    </ul>
                </div>
            </p>
            <p>
                <Title>2020.02 ~ 2021.07</Title>
                <span className="right">(주)마루이엔지 프론트엔드 개발자</span>
                <div>
                    <ul>
                        <li>작업내용</li>
                    </ul>
                </div>
            </p>

            <CircleWrap>
                <div className="circle">
                </div>
                <div className="circle">
                </div>
                <div className="circle">
                </div>
                <div className="circle">
                </div>
                <div className="circle">
                </div>
            </CircleWrap>




        </div>
    )
}
export default Experience;