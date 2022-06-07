const { Kakao } = window;

export function initKakao() {
    const KAKAO_KEY = process.env.REACT_APP_KAKAO_KEY
    // 중복되는 초기화를 막기 위해 isInitialized()로 SDK 초기화 여부를 판단
    if (!window.Kakao.isInitialized()) {
        // JavaScript key를 인자로 주고 SDK 초기화
        window.Kakao.init(KAKAO_KEY);
        console.log("여기 안들어올텐데");
        getToken();
    }
}

export function getToken() {
    // 카카오로그인 - 이메일/비밀번호 고정 필요
    window.Kakao.Auth.login({
        // scope,
        // success는 인증 정보를 응답(response)으로 받는다. 
        success: function (response) {
            //카카오 SDK에 사용자 토큰을 설정한다.
            window.Kakao.Auth.setAccessToken(response.access_token);
        },
        fail: function (error) {
            console.log(error);
        },
    });
}