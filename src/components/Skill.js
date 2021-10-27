import styled from "styled-components";

const Circle = styled.div`{}`;
const SkillWrap = styled.div`{width:30%;margin-left:10px;margin-right:10px;display:inline-block;float:left}`;
const SkillText = styled.p`{font-size:20px;font-weight:bold;color:#6a00ff;text-align:center;margin:5px 0 0 0}`;


const GRAY = '#eeeeee';
const PURPLE = '#6a00ff';

const StyledIndex = styled.div`
    display:flex;
	justify-content: center;
	align-items: center;
	.circle {
		width: 210px;
		height: 210px;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: ${PURPLE};
		background-image: ${({ backgroundImage }) => backgroundImage};
        margin-bottom:1rem;
	}
	.inner-circle {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: white;
		width: 200px;
		height: 200px;
		border-radius: 50%;
	}
	.per {
		font-size: 32px;
		font-weight: 800;
		color: ${PURPLE};
	}
`;

let percent = 0;
const per = percent * 3.6;
let deg = 90;
let color = PURPLE;
if (per <= 180) {
    deg += per;
} else {
    deg += per - 180;
    color = PURPLE;
}
const backgroundImage = `
    linear-gradient(${deg}deg, transparent 50%, ${color} 50%),
    linear-gradient(90deg, ${GRAY} 50%, transparent 50%);
  `;


const renderSwitch = (param) => {
    switch (param) {
        case 'html':
            percent = 90;
            return 'HTML5';
        case 'css':
            percent = 90;
            return 'CSS3';
        case 'javascript':
            percent = 70;
            return 'JavaScript';
        case 'react':
            percent = 60;
            return 'React';
        case 'jquery':
            percent = 80;
            return 'jQuery';
        default:
            return '-';
    }

}

function Skill() {
    return (
        <div>
            <h1>Skill</h1>
            <p>스킬을 애니메이션 넣어서 퍼센트로 표현하면 좋을듯</p>
            <div>
                <SkillWrap>
                    <StyledIndex backgroundImage={backgroundImage}>
                        <div className="circle">
                            <div className="inner-circle">
                                <div className="per">
                                    {/* <SkillText>{renderSwitch('html')}</SkillText> */}
                                    <SkillText>{renderSwitch('html')}</SkillText>
                                    {percent}%
                                </div>
                            </div>
                        </div>
                    </StyledIndex>
                </SkillWrap>

                <SkillWrap>
                    <StyledIndex backgroundImage={backgroundImage}>
                        <div className="circle">
                            <div className="inner-circle">
                                <div className="per">
                                    <SkillText>{renderSwitch('css')}</SkillText>
                                    {percent}%
                                </div>
                            </div>
                        </div>
                    </StyledIndex>
                </SkillWrap>
                <SkillWrap>
                    <StyledIndex backgroundImage={backgroundImage}>
                        <div className="circle">
                            <div className="inner-circle">
                                <div className="per">
                                    <SkillText>{renderSwitch('javascript')}</SkillText>
                                    {percent}%
                                </div>
                            </div>
                        </div>
                    </StyledIndex>
                </SkillWrap>
                <SkillWrap>
                    <StyledIndex backgroundImage={backgroundImage}>
                        <div className="circle">
                            <div className="inner-circle">
                                <div className="per">
                                    <SkillText>{renderSwitch('react')}</SkillText>
                                    {percent}%
                                </div>
                            </div>
                        </div>
                    </StyledIndex>

                </SkillWrap>
                <SkillWrap>
                    <StyledIndex backgroundImage={backgroundImage}>
                        <div className="circle">
                            <div className="inner-circle">
                                <div className="per">
                                    <SkillText>{renderSwitch('jquery')}</SkillText>
                                    {percent}%
                                </div>
                            </div>
                        </div>
                    </StyledIndex>
                </SkillWrap>
                <SkillWrap>
                    <StyledIndex backgroundImage={backgroundImage}>
                        <div className="circle">
                            <div className="inner-circle">
                                <div className="per">
                                    <SkillText>{renderSwitch('html')}</SkillText>
                                    {percent}%
                                </div>
                            </div>
                        </div>
                    </StyledIndex>
                </SkillWrap>
            </div>
        </div>
    )
}
export default Skill;