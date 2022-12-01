/** Main page에 들어갈 컴포넌트들
 * 1. 배너형식의 건강정보 슬라이더, 
 * 2. 현재 날씨 정보
*/
import { useNavigate } from 'react-router-dom';
import HealthInfo from '../components/HealthInfo';
import Weather from '../components/Weather';


const Main = () => {

    const navigate = useNavigate();

    return ( 
        <div>
            <br />
            <button onClick={()=>{navigate('/login')}}>로그인</button>
            <br /><br />
            <HealthInfo />
            <Weather />
        </div>
    );
}

export default Main;