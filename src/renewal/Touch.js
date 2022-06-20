import { useState, useEffect } from 'react';
import { FaPhoneAlt, FaRegEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { initKakao } from '../utils/common';

function Touch() {
    const [comment, setComment] = useState('');

    const handleCommentChange = event => {
        setComment(event.target.value);
      };

    useEffect(() => {
        // 빌드 후에도 새로고침 시 에러 발생하는지 확인 필요
        // initKakao();
    }, []);
    function sendComment() {
        console.log("sendComment");

        window.Kakao.API.request({
            url: '/v2/api/talk/memo/default/send',
            data: {
                template_object: {
                    object_type: 'text',
                    text: comment,
                    link: {
                        mobile_web_url: 'https://developers.kakao.com',
                        web_url: 'https://developers.kakao.com',
                    },
                    button_title: '자세히 보기',
                },
            },
            success: function (response) {
                let commentInput = document.getElementById("comment");
                commentInput.value = '';
            },
            fail: function (error) {
                console.log(error);
            },
        });
    }

    return (
        <div id='touch'>
            <h2 className='medium'>Get In Touch</h2>
            <div className='flexBox'>
                <div className="touchBox">
                    <div><FaPhoneAlt /></div>
                    <p className='medium'>PHONE</p>
                    <span>
                        010-9985-6676
                    </span>
                </div>
                <div className="touchBox">
                    <div><FaRegEnvelope /></div>
                    <p className='medium'>EMAIL</p>
                    <span>
                        <a style={{ padding: '20px' }} href='mailto:ejko0911@gmail.com'>ejko0911@gmail.com</a>

                    </span>
                </div>
                <div className="touchBox">
                    <div><FaMapMarkerAlt /></div>
                    <p className='medium'>ADDRESS</p>
                    <span>
                        서울특별시 성동구<br />독서당로59다길 28
                    </span>
                </div>
            </div>
            {/* <div className='commentArea'>
                <h3>Comment</h3>
                <p className='star'>입력하신 내용은 카카오톡 메세지로 전달됩니다. <br />자유로운 의견을 남겨주세요😊</p>
                <input id="comment" type="textArea" onChange={handleCommentChange} />
                <button onClick={sendComment}>전송하기</button>
            </div> */}
        </div>
    )
}
export default Touch;