import styled from "styled-components";

const Title = styled.p`{
    font-size:20px;
    font-weight:bold;
    color:#6a00ff;
    margin:0px;
    }
`;
const List = styled.div`{
    .topLine div{
        height:3px;
        display:inline-block;
        float:left;
    }
    .gray{
        width:30%;
        display:inline-block;
        float:left;
        margin-bottom:5px;
        span{
            font-size:13px;
        }

    }
    .yellow{
        width:70%;
        display:inline-block;
        float:left;
        margin-bottom:5px;
        ul{
            list-style-type:none;
        }
        li{
            position:relative;
            padding-left:10px;
        }
        li:before{
            position:absolute;
            content:'-';
            text-indent: -1em;
        }
    }
}`;


function Experience() {
    return (
        <List>
            <h1>Experience Copy</h1>
            <div className="topLine">
                <div className="gray" style={{ background: 'gray' }}></div>
                <div className="yellow" style={{ background: 'yellow' }}></div>
            </div>
            <div className="gray">
                <Title className="right">2019.02</Title>
                <span>대전대학교 <br/>회계학과, 전자정보통신공학과 졸업</span>
            </div>
            <div className="yellow">
                <ul>
                    <li>교내 캡스톤디자인 경진대회 대상<br />장애인 주차구역</li>
                    <li>교내 창업동아리 공모전 참가<br />소외된, 경진대회</li>
                    <li>ICT 학점연계 인턴십</li>

                </ul>
            </div>
            <div className="gray">
                <Title>2018.08 ~ 2019.03</Title>
                <span>(주)플랜아이 퍼블리셔 인턴 및 수습</span>
            </div>
            <div className="yellow">
                <ul>
                    <li>약 15개 프로젝트 보조</li>
                    <li>한국정직운동본부 작업</li>
                </ul>
            </div>
            <div className="gray">
                <Title>2019.05 ~ 2019.12</Title>
                <span>대전 인재개발원 <br/>전자정보통신sw프레임워크 과정 수료</span>
            </div>
            <div className="yellow">
                <ul>
                    <li>몇시간 동안 수요했는지, 3개의 프로젝트</li>
                    <li>자세히 버튼을 클릭해서 포트폴리오로? 연결되도록?</li>
                </ul>
            </div>
            <div className="gray">
                <Title>2020.02 ~ 2021.07</Title>
                <span className="right">(주)마루이엔지 프론트엔드 개발자</span>
            </div>
            <div className="yellow">
                <ul>
                    <li>작업내용</li>
                </ul>
            </div>
        </List>
    )
}
export default Experience;