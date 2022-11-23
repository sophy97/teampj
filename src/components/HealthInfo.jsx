/** 
 * 배너 > 짧은 건강정보 제공하는 컴포넌트
 * 사용 데이터: 국가건강정보포털 공공데이터 openpi  */

// import slick > slider사용 위함
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// styled-components
import styled from 'styled-components'

// 슬릭확인용 데이터
// import {dailyHealth} from '../data/dailyHealth';

// openAPI data 관련
import axios from 'axios';
import { useEffect, useState } from "react";


const HealthInfo = () => {

    // slick 속성
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    // open data 관련 변수들 선언
    const API_KEY = "NhWQPFPIhlG7CXNVv%2FvGvXvTfTSCIVWpKtJ0dyNrjJc3CwkPLT7t8SaB5Eli5rwg%2B543UlffWxjGNyIjzrKKkA%3D%3D";
    const [result, setResult] = useState({});
    const [loading, setLoading] = useState(false);

    // 조건문 > 1~5까지 배열 idx값과 매칭해서 알아서 url값 5가지로 가져오고싶음
    const dissArr = ["감기","눈병","식중독","천식","피부염"];

    for (var i = 0; i < dissArr.length; i++) {
        console.log(dissArr[i]);
    }
    // open data url
    const url = `https://apis.data.go.kr/B550928/dissForecastInfoSvc/getDissForecastInfo?serviceKey=${API_KEY}&numOfRows=5&pageNo=1&type=json&dissCd=1&znCd=`;
    // const url2 = `https://apis.data.go.kr/B550928/dissForecastInfoSvc/getDissForecastInfo?serviceKey=${API_KEY}&numOfRows=5&pageNo=1&type=json&dissCd=2&znCd=`;
    // const url3 = `https://apis.data.go.kr/B550928/dissForecastInfoSvc/getDissForecastInfo?serviceKey=${API_KEY}&numOfRows=5&pageNo=1&type=json&dissCd=3&znCd=`;
    // const url4 = `https://apis.data.go.kr/B550928/dissForecastInfoSvc/getDissForecastInfo?serviceKey=${API_KEY}&numOfRows=5&pageNo=1&type=json&dissCd=4&znCd=`;
    // const url5 = `https://apis.data.go.kr/B550928/dissForecastInfoSvc/getDissForecastInfo?serviceKey=${API_KEY}&numOfRows=5&pageNo=1&type=json&dissCd=5&znCd=`;


    // data get 요청
    const getHealthInfo = async() => {
        const data = await axios ({
            method :'get',
            url : url,
        });
        console.log(data);
        setResult(data);
        console.log(result);
    }

    // 확인
    useEffect(()=>{
        getHealthInfo();
    },[])
    useEffect(()=>{
        if(result.status === 200) {
            setLoading(true);
            console.log(result);
        }
    },[result])



    return ( 
        <StyledSlider>
        <div className="infoSlider-box">
            <h3>daily : 5대 질병 예측 정보</h3>
            <Slider {...settings}>
                {
                loading
                ?
                (<div>
                <h1>{dissArr[0]}</h1>
                <h4>{result.data.response.body.items[0].dt}</h4>
                <h4>{result.data.response.body.items[0].dissRiskXpln}</h4>
                </div>
                )
                :(<h3>없음</h3>)
                }
                {
                loading
                ?
                (<div>
                <h1>{dissArr[1]}</h1>
                <h4>{result.data.response.body.items[1].dt}</h4>
                <h4>{result.data.response.body.items[1].dissRiskXpln}</h4>
                </div>
                )
                :(<h3>없음</h3>)
                }
                {
                loading
                ?
                (<div>
                <h1>{dissArr[1]}</h1>
                <h4>{result.data.response.body.items[1].dt}</h4>
                <h4>{result.data.response.body.items[1].dissRiskXpln}</h4>
                </div>
                )
                :(<h3>없음</h3>)
                }
                {
                loading
                ?
                (<div>
                <h1>{dissArr[1]}</h1>
                <h4>{result.data.response.body.items[1].dt}</h4>
                <h4>{result.data.response.body.items[1].dissRiskXpln}</h4>
                </div>
                )
                :(<h3>없음</h3>)
                }
                
            </Slider>
        </div>
        </StyledSlider>
    );
}

export default HealthInfo;



// styled-components 로 기본 화살표 제거
const StyledSlider = styled(Slider)`
height: 300px;
width: 100%;
position: relative;


// 슬릭기본화살표 제거
.slick-prev::before, .slick-next::before 
{
    opacity: 0;
    display: none;
}
.slick-prev::before, .slick-next::before 
{
opacity: 0;
display: none;
}`