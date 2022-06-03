import { FaPhoneAlt, FaRegEnvelope, FaMapMarkerAlt} from 'react-icons/fa';

function Touch(){
    function sendComment(){
        console.log("sendComment");
    }
    return(
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
                        <a style={{padding:'20px'}} href='mailto:ejko0911@gmail.com'>ejko0911@gmail.com</a>
                        
                    </span>
                </div>
                <div className="touchBox">
                    <div><FaMapMarkerAlt /></div>
                    <p>ADDRESS</p>
                    <span>
                        서울특별시 성동구<br/>독서당로59다길 28
                    </span>
                </div>
            </div>
            <div className='commentArea'>
                <h3>Comment</h3>
                <p className='star'>입력하신 내용은 카카오톡 메세지로 전달됩니다. <br/>자유로운 의견을 남겨주세요😊</p>
                <input type="textARea" />
                <button onClick={sendComment}>Submit</button>
            </div>
            
        </div>
    )
}
export default Touch;