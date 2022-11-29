/** LoginPage에 들어갈 정보
 */
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../data/DataContext";

const LoginPage = () => {

    const [InputId, setInputId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const data = useContext(DataContext);
    

    	// input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
        const handleId = (e) => {
            setInputId(e.target.value)
        }
        const handlePw = (e) => {
            setPassword(e.target.value)
        }
        // login 버튼 클릭 이벤트
        const onClickLogin = () => {
            if (data.user.userid === InputId) {
                navigate('/');
            } else {
                navigate('/adduser');
            }
            
        }
        // 페이지 렌더링 후 가장 처음 호출되는 함수
        useEffect ( () => {
        },[]);
        
    return ( 
        <div>
            <h1>Login</h1>
            <div>
                <label htmlFor='input_id'>id : </label>
                <input type='text' name='input_id' value={InputId} onChange={handleId} />
            </div>
            <div>
                <label htmlFor='input_pw'>password : </label>
                <input type='password' name='input_pw' value={password} onChange={handlePw} />
            </div>
            <div>
                <button type='button' onClick={onClickLogin}>Login</button>
            </div>
        </div>
    );
}

export default LoginPage;