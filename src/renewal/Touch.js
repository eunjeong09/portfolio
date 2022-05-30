import { FaPhoneAlt, FaRegEnvelope, FaMapMarkerAlt} from 'react-icons/fa';

function Touch(){
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
                        ejko0911@gmail.com
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
            <div>
                연락 받기? - 카톡으로 보내기 구현
                <button>Submit</button>
            </div>
        </div>
    )
}
export default Touch;