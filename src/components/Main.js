import { FaGithub, FaPhoneAlt, FaVimeoV, FaEnvelope, FaChild } from 'react-icons/fa';

const icons = {
    verticalAlign:"bottom"
}

function Main() {
    return (
        <div>
            <h1>main</h1>
            <p>어쩌구 저쩌구 프론트엔드 개발자 고은정입니다.</p>
            <p><FaChild style={icons}/> 1996.09.06</p>
            <p><FaPhoneAlt style={icons}/> 010-9985-6676</p>
            <p><FaEnvelope style={icons}/> ejko0911@gmail.com</p>
            <p><FaGithub style={icons}/> https://github.com/eunjeong09</p>
            <p><FaVimeoV style={icons}/> https://velog.io/@eunjeong</p>
        </div>

        // 블로그 이메일 링크
    )
}
export default Main;