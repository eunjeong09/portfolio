import styled from "styled-components";

const Circle = styled.div`{width:50px;height:50px;border-radius:50px;background-color:yellow}`;

const LeftArea = styled.div`{width:50%;float:left}`;
const RightArea = styled.div``;
const Title = styled.span`{font-size:20px;font-weight:bold;color:#6a00ff;margin-right:20px}`;

function Experience() {
    return (
        <div>
            {/* <LeftArea>
                <ul>
                    <li>왼쪽 목록으 교육과 경력을 나누는게 의미있나?</li>
                </ul>
            </LeftArea> */}
            <RightArea>
                <h1>Experience</h1>
                <p>
                    <Title>2015.03</Title>
                    <span>대전대학교 회계학과 입학</span>
                </p>
                <p>
                    <Title>2019.02</Title>
                    <span>대전대학교 회계학과, 전자정보통신공학과 졸업</span>
                </p>
                <p>
                    <Title>2018.08 ~ 2019.03</Title>
                    <span>(주)플랜아이 퍼블리셔 인턴 및 수습</span>
                </p>
                <p>
                    <Title>2019.05 ~ 2019.12</Title>
                    <span>대전 인재개발원 전자정보통신sw프레임워크 과정 수료</span>
                </p>
                <p>
                    <Title>2020.02 ~ 2021.07</Title>
                    <span>(주)마루이엔지 프론트엔드 개발자</span>
                </p>



                <Circle>
                    1
                </Circle>
                <Circle>
                    2
                </Circle>
                <Circle>
                    3
                </Circle>
                <Circle>
                    4
                </Circle>
                <Circle>
                    5
                </Circle>

            </RightArea>



        </div>
    )
}
export default Experience;