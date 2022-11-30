import { useContext } from "react";
import DataContext from "../data/DataContext";

const MyPage = () => {

    const data = useContext(DataContext);

    return ( 
        <div>
            <h1>mypage</h1>
            <div>
                {/* id값과 일치한 로그인데이터[i번째]를 불러와야함 */}
                <p> 유저정보: {data.state.user[0].username} </p>
            </div>
        </div>
    );
}

export default MyPage;