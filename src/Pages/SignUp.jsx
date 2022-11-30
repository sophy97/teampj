import { useState } from "react";

const SignUp = () => {

    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');
    const [pwConfirm, setPwConfirm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`submit! ${userId} ${userPw} ${pwConfirm}`);
    };

    return ( 
        <div>
            <h1>회원가입</h1>
            <form onSubmit={handleSubmit}>
            <input
            name="userId"
            value={userId}
            placeholder="아이디 입력"
            onChange={(e) => setUserId(e.target.value)}
            />
            <input
            type="userPw"
            name="userPw"
            value={userPw}
            placeholder="비밀번호 입력"
            onChange={(e) => setUserPw(e.target.value)}
            />
            <input
            type="password"
            name="passwordConfirm"
            value={pwConfirm}
            placeholder="비밀번호 확인"
            onChange={(e) => setPwConfirm(e.target.value)}
            />
            {userPw !== pwConfirm && <p>비밀번호가 일치하지 않습니다.</p>}
            <input type="submit" />
        </form>
        </div>
    );
}

export default SignUp;