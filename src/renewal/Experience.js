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
                            <div className="list">
                                <ul className="dash">
                                    <li>교내 캡스톤디자인 경진대회 대상<br />장애인 주차구역</li>
                                    <li>교내 창업동아리 공모전 참가<br />소외된, 경진대회</li>
                                    <li>ICT 학점연계 인턴십</li>
                                </ul>
                            </div>
                        </li>
                        <li className="bottom20">
                            <Title>(주)플랜아이 퍼블리셔 인턴 및 수습</Title>
                            <Date>2018.08 ~ 2019.03</Date>
                            <div className="list">
                                <ul className="dash">
                                    <li>국가기술원 웹진</li>
                                    <li>한국정직운동본부</li>
                                    <li>대전대학교 산학협력단</li>
                                    <li>약 15개 프로젝트 보조</li>
                                </ul>
                            </div>
                        </li>
                        <li className="bottom20">
                            <Title>대전 인재개발원 <br />전자정보통신sw프레임워크 과정 수료</Title>
                            <Date>2019.05 ~ 2019.12</Date>
                            <div className="list">
                                <ul className="dash">
                                    <li>1,120시간 교육과정</li>
                                    <li>3개의 프로젝트(나니커피/누만다/한국전자리뉴얼)</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="right">
                    <ul>
                        <li className="bottom20">
                            <Title>(주)마루이엔지 프론트엔드 개발자</Title>
                            <Date>2020.02 ~ 2021.07</Date>
                            <div className="list">
                                <ul className="dash">
                                    <li>프론트엔드 개발자</li>
                                    <li>약 5개의 사내 프로젝트 진행(마루스트림/</li>
                                </ul>
                            </div>
                        </li>
                        <li className="bottom20">
                            <Title>(주)버즈비터즈 프론트엔드 개발자</Title>
                            <Date>2022.01 ~ 2022.02</Date>
                            <div className="list">
                                <ul className="dash">
                                    <li>회원가입/마이페이지 리뉴얼 단기 인턴</li>
                                    <li>퍼블리싱 및 vue.js를 사용한 프론트엔드 개발</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )

}
export default Experience;