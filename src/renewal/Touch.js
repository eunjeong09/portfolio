import { useEffect } from 'react';
import { FaPhoneAlt, FaRegEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { initKakao } from '../utils/common';

function Touch() {
    useEffect(() => {
        // 빌드 후에도 새로고침 시 에러 발생하는지 확인 필요
        initKakao();
    }, []);
    function sendComment() {
        console.log("sendComment");

        window.Kakao.API.request({
            url: '/v2/api/talk/memo/default/send',
            data: {
                template_object: {
                    object_type: 'text',
                    text:
                        '기본 템플릿으로 제공되는 텍스트 템플릿은 텍스트를 최대 200자까지 표시할 수 있습니다. 텍스트 템플릿은 텍스트 영역과 하나의 기본 버튼을 가집니다. 임의의 버튼을 설정할 수도 있습니다. 여러 장의 이미지, 프로필 정보 등 보다 확장된 형태의 카카오톡 공유는 다른 템플릿을 이용해 보낼 수 있습니다.',
                    link: {
                        mobile_web_url: 'https://developers.kakao.com',
                        web_url: 'https://developers.kakao.com',
                    },
                    button_title: '자세히 보기',
                },
            },
            success: function (response) {
                console.log(response);
            },
            fail: function (error) {
                console.log(error);
            },
        });


    }
    return (
        <div id='touch'>
            <h2>Get In Touch</h2>
            <div className='flexBox'>
                <div className="touchBox">
                    <div><FaPhoneAlt /></div>
                    <p>PHONE</p>
                    <span>
                        010-9985-6676
                    </span>
                </div>
                <div className="touchBox">
                    <div><FaRegEnvelope /></div>
                    <p>EMAIL</p>
                    <span>
                        <a style={{ padding: '20px' }} href='mailto:ejko0911@gmail.com'>ejko0911@gmail.com</a>

                    </span>
                </div>
                <div className="touchBox">
                    <div><FaMapMarkerAlt /></div>
                    <p>ADDRESS</p>
                    <span>
                        서울특별시 성동구<br />독서당로59다길 28
                    </span>
                </div>
            </div>
            <div className='commentArea'>
                <h3>Comment</h3>
                <p className='star'>입력하신 내용은 카카오톡 메세지로 전달됩니다. <br />자유로운 의견을 남겨주세요😊</p>
                <input type="textARea" />
                <button onClick={sendComment}>Submit</button>
            </div>

        </div>
    )
}
export default Touch;