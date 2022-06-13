import styled from "styled-components";

function Experience() {
    const Title = styled.p`{
        font-weight:bold;
        font-size:18px;
        display:inline-block;
        margin-right:10px;
        letter-spacing: 4.5px;
    }`
    const Date = styled.p`{
        letter-spacing: 5px;
        color: #ddd;
        font-size:14px;
        margin-bottom:10px;
    }`;

    return (
        <div id="experience">
            <h2>Experience</h2>
            <div className="wrap">
                <div className="left">
                    <ul>
                        <li className="bottom20">
                            <Title>대전대학교 <br />회계학과, 전자정보통신공학과 졸업</Title>
                            <Date>2015.03 ~ 2019.02</Date>
                            <ul className="dash">
                                <li>교내 캡스톤디자인 경진대회 대상<br />장애인 주차구역</li>
                                <li>교내 창업동아리 공모전 참가<br />소외된, 경진대회</li>
                                <li>ICT 학점연계 인턴십</li>
                            </ul>
                        </li>
                        <li className="bottom20">
                            <Title>(주)플랜아이 퍼블리셔 인턴 및 수습</Title>
                            <Date>2018.08 ~ 2019.03</Date>
                            <p className="bold bottom10">퍼블리싱</p>
                            <ul className="dash bottom20">
                                <li>한국정직운동본부</li>
                                <li>대전대학교 Living Lab</li>
                                <li>원자력발전소 외 약 15개 프로젝트</li>
                            </ul>
                            <p className="bold bottom10">웹 접근성 체크리스트 작성 및 수정</p>
                            <ul className="dash">
                                <li>한국 건설기술 연구원 외 3개 프로젝트</li>
                            </ul>
                        </li>
                        <li className="bottom20">
                            <Title>대전 인재개발원 <br />전자정보통신sw프레임워크 과정 수료</Title>
                            <Date>2019.05 ~ 2019.12</Date>
                            <ul className="dash">
                                <li>1,120시간 교육과정</li>
                                <li>3개의 프로젝트(나니커피/누만다/한국전자리뉴얼)</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="right">
                    <ul>
                        <li className="bottom20">
                            <Title>(주)마루이엔지 프론트엔드 개발자</Title>
                            <Date>2020.02 ~ 2021.07</Date>
                            <p className="bold bottom10">사내 프로젝트 진행</p>
                            <ul className="dash">
                                <li>AT3Box</li>
                                <li>AT3Extractor</li>
                                <li>HomeCaster</li>
                                <li>AT3Mon</li>
                                <li>AT3Calc</li>
                                <li>NetTool</li>
                                <li>AEATReceiver</li>
                            </ul>
                        </li>
                        <li className="bottom20">
                            <Title>(주)버즈비터즈 프론트엔드 개발자</Title>
                            <Date>2022.01 ~ 2022.02</Date>
                            <ul className="dash">
                                <li>회원가입/마이페이지 리뉴얼 단기 인턴</li>
                                <li>퍼블리싱 및 vue.js를 사용한 프론트엔드 개발</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )

}
export default Experience;