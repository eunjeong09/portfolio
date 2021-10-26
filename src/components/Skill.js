import styled from "styled-components";

const Circle = styled.div`{}`;
const SkillWrap = styled.div`{width:30%;margin-left:10px;margin-right:10px;display:inline-block;float:left}`;
const SkillText = styled.p`{font-size:20px;font-weight:bold;color:#6a00ff;text-align:center}`;
function Skill() {
    return (
        <div>


            <h1>Skill</h1>
            <p>스킬을 애니메이션 넣어서 퍼센트로 표현하면 좋을듯</p>
            <div>
                <SkillWrap>
                    <div>
                        
                    </div>
                    <SkillText>html5</SkillText>
                </SkillWrap>
                <SkillWrap><SkillText>css3</SkillText></SkillWrap>
                <SkillWrap><SkillText>javascript</SkillText></SkillWrap>
                <SkillWrap><SkillText>React</SkillText></SkillWrap>
                <SkillWrap><SkillText>jquery</SkillText></SkillWrap>
                <SkillWrap><SkillText>?</SkillText></SkillWrap>
            </div>
        </div>
    )
}
export default Skill;