const {Kakao} = window;

export function initKakao() {
    const KAKAO_KEY = process.env.REACT_APP_KAKAO_KEY
    Kakao.init(KAKAO_KEY);

    // 카카오로그인 - 토큰발급 필요
}