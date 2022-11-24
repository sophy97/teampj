/** 
 *  배너 > 짧은 건강정보 제공하는 컴포넌트
 *  데이터: 국가건강정보포털 openapi에서 parsing */

// import slick > slider사용 위함
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// import styled-components
import styled from 'styled-components'

// import json data
import apiInfo from '../data/apiInfo.json';

import { useState } from "react";
import Image1 from '../coldImg.jpg';



const HealthInfo = () => {

    // 당일 날짜출력
    let date = new Date();
    let days = ["일", "월", "화", "수", "목", "금", "토"];
    // 모달 여닫기 > 초기값 false(닫힘)
    const [modalOpen, setModalOpen] = useState(false);
    // 모달 함수화
    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    
    
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
    
    // modal 관련 함수


    return ( 

        <StyledSlider>

            {/* <img src={Image1} alt="" /> */}
            <div className="infoSlider-box">
                <h4> 5대 질병 행동요령</h4>
                <p>{date.getFullYear()}/{date.getMonth()}/{date.getDate()} {days[date.getDay()]}</p>
        
                <Slider {...settings}>
                { // json으로 저장해둔 data를 map()으로 하나씩 슬라이더에 출력
                apiInfo.map((item, idx)=> (
                <div className='infoSlider' key={idx} src={Image1}
                    onClick={()=>{setModalOpen(!modalOpen)}
                }>
                {
                modalOpen === true ? 
                <InfoModal 
                name={apiInfo[idx].dissNm} contents={apiInfo[idx].dissRiskXpln} open={modalOpen} close={closeModal} />
                :
                null
                }
                <h2>{item.dissNm}</h2>
                <button onClick={openModal}>눌러서 정보확인</button>
                </div> )) 
                }
                </Slider>
            </div>
            
        </StyledSlider>
    );
}
export default HealthInfo;


// Modal 컴포넌트
function InfoModal (props) {

    const { name, contents, close, open } = props;
    return (
        <Container>
            <div className={open ? 'openModal modal' : 'modal'}>
                {open ? (
                <section>
                    <header>
                    <h3>{name}</h3>
                    </header>
                    <main>
                    <p>{contents}</p>
                    </main>
                    <footer>
                    <button className="close" onClick={close}>닫기</button>
                    </footer>
                    </section>
                ) : null}
                </div>
        </Container>
    );
}



// styled-components

const StyledSlider = styled(Slider)`
height: 300px;
width: 100%;
position: relative;
border: 2px solid gray;

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


const Container = styled.div`
.modal {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.1);
}

.modal > section {
    width: 90%;
    max-width: 450px;
    margin: 0 auto;
    border-radius: 0.3rem;
    background-color: #fff;
    /* 팝업이 열릴때 스르륵 열리는 효과 */
    animation: modal-show 0.3s;
    overflow: hidden;
  }
  .modal > section > header {
    position: relative;
    padding: 16px 64px 16px 16px;
    background-color: #f1f1f1;
    font-weight: 700;
  }
  .modal > section > header button {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 30px;
    font-size: 21px;
    font-weight: 700;
    text-align: center;
    color: #999;
    background-color: transparent;
  }
  .modal > section > main {
    padding: 16px;
    border-bottom: 1px solid #dee2e6;
    border-top: 1px solid #dee2e6;
  }
  .modal > section > footer {
    padding: 12px 16px;
    text-align: right;
  }
  .modal > section > footer button {
    padding: 6px 12px;
    color: #fff;
    background-color: #6c757d;
    border-radius: 5px;
    font-size: 13px;
  }
  .modal.openModal {
    display: flex;
    align-items: center;
    /* 팝업이 열릴때 스르륵 열리는 효과 */
    animation: modal-bg-show 0.3s;
  }
height: 250px;
width: 100%;
border: 2px solid yellow;
`