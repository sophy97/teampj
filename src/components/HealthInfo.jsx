/** 
 *  배너 > 짧은 건강정보 제공하는 컴포넌트
 *  데이터: 국가건강정보포털 openapi에서 parsing */

// import slick > slider사용 위함
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// import styled-components
import styled from 'styled-components'

// import data
import { dailyInfo } from "../data/dailyInfo"; 


const HealthInfo = () => {

    // 당일 날짜출력
    let date = new Date();
    let days = ["일", "월", "화", "수", "목", "금", "토"];
    
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
    

    return (

      <StyledSlider>
        <>
        <div className="title-box">
        <h4>5대 질병 행동요령</h4>
        <p>{date.getFullYear()}/{date.getMonth()}/{date.getDate()} {days[date.getDay()]}</p>        
        </div>
        
        {/* map() 잘 되다가 갑자기 안 돼서, 일단 반복합니다.. */}
        <Slider {...settings}>
          <div className="slideList">
            <h2>{dailyInfo[0].dissNm}</h2>
            <p>{dailyInfo[0].dissRiskXpln}</p>
          </div>
          <div className="slideList">
            <h2>{dailyInfo[1].dissNm}</h2>
            <p>{dailyInfo[1].dissRiskXpln}</p>
          </div>
          <div className="slideList">
            <h2>{dailyInfo[2].dissNm}</h2>
            <p>{dailyInfo[2].dissRiskXpln}</p>
          </div>
          <div className="slideList">
            <h2>{dailyInfo[3].dissNm}</h2>
            <p>{dailyInfo[3].dissRiskXpln}</p>
          </div>
          <div className="slideList">
            <h2>{dailyInfo[4].dissNm}</h2>
            <p>{dailyInfo[4].dissRiskXpln}</p>
          </div> 
        </Slider>
        </>
      </StyledSlider>
    );
}

export default HealthInfo;




// styled-components
const StyledSlider = styled(Slider)`
height: 300px;
width: 100%;
position: relative;
border: 2px solid lightgray;

.slideList > p {
  padding: 5px 15px;
}



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
