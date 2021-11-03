import styled from "styled-components";

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


let color = PURPLE;

let backgroundImage = ``;

const renderBackgroundImage = (param) => {
    let deg = 90;
    let per = param * 3.6;
    if (per <= 180) {
        deg += per;
    } else {
        deg += per - 180;
        color = PURPLE;
    }

    let backgroundImage = `
        linear-gradient(${deg}deg, transparent 50%, ${color} 50%),
        linear-gradient(90deg, ${GRAY} 50%, transparent 50%);
    `;

    return backgroundImage;

}

const renderSwitch = (param) => {
    switch (param) {
        case 'html':
            return { skill: 'HTML5', percent: 90 };
        case 'css':
            return { skill: 'CSS3', percent: 90 };
        case 'javascript':
            return { skill: 'JavaScript', percent: 70 };
        case 'react':
            return { skill: 'React', percent: 60 };
        case 'jquery':
            return { skill: 'jQuery', percent: 80 };
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
                    <StyledIndex backgroundImage={renderBackgroundImage(90)}>
                        <div className="circle">
                            <div className="inner-circle">
                                <div className="per">
                                    <SkillText>{renderSwitch('html').skill}</SkillText>
                                    {renderSwitch('html').percent}%
                                </div>
                            </div>
                        </div>
                    </StyledIndex>
                </SkillWrap>
                <SkillWrap>
                    <StyledIndex backgroundImage={renderBackgroundImage(90)}>
                        <div className="circle">
                            <div className="inner-circle">
                                <div className="per">
                                    <SkillText>{renderSwitch('css').skill}</SkillText>
                                    {renderSwitch('css').percent}%
                                </div>
                            </div>
                        </div>
                    </StyledIndex>
                </SkillWrap>
                <SkillWrap>
                    <StyledIndex backgroundImage={renderBackgroundImage(70)}>
                        <div className="circle">
                            <div className="inner-circle">
                                <div className="per">
                                    <SkillText>{renderSwitch('javascript').skill}</SkillText>
                                    {renderSwitch('javascript').percent}%
                                </div>
                            </div>
                        </div>
                    </StyledIndex>
                </SkillWrap>
                <SkillWrap>
                    <StyledIndex backgroundImage={renderBackgroundImage(60)}>
                        <div className="circle">
                            <div className="inner-circle">
                                <div className="per">
                                    <SkillText>{renderSwitch('react').skill}</SkillText>
                                    {renderSwitch('react').percent}%
                                </div>
                            </div>
                        </div>
                    </StyledIndex>

                </SkillWrap>
                <SkillWrap>
                    <StyledIndex backgroundImage={renderBackgroundImage(80)}>
                        <div className="circle">
                            <div className="inner-circle">
                                <div className="per">
                                    <SkillText>{renderSwitch('jquery').skill}</SkillText>
                                    {renderSwitch('jquery').percent}%
                                </div>
                            </div>
                        </div>
                    </StyledIndex>
                </SkillWrap>
                <SkillWrap>
                    <StyledIndex backgroundImage={renderBackgroundImage(90)}>
                        <div className="circle">
                            <div className="inner-circle">
                                <div className="per">
                                    <SkillText>{renderSwitch('html').skill}</SkillText>
                                    {renderSwitch('html').percent}%
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