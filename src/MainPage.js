import React, { useState, useEffect, useRef } from "react";
import styles from "./style/mainPage.module.css"
import logoicon from "./img/logoicon.png"
import homeicon from "./img/homeicon.png"
import favicon from "./img/favicon.png"
import CAIComponent from "./components/CAIComponent";
import FineDustcom from "./components/FineDustcom" ;
import UltraDust from "./components/UltraDustCom";
import NoticeCom from "./components/NoticeCom";
import MapCom from "./components/MapCom";
import SelectCom from "./components/SelectCom";
import temData from "./data.json";
import moment from "moment";
import 'moment/locale/ko';
import axios from "axios";

//실시간 시간을 업데이트 하기 위한 함수 생성
function useInterval(callback, delay) {
  const savedCallback = useRef(); // 최근에 들어온 callback을 저장할 ref를 하나 만든다.

  useEffect(() => {
    savedCallback.current = callback; // callback이 바뀔 때마다 ref를 업데이트 해준다.
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current(); // tick이 실행되면 callback 함수를 실행시킨다.
    }
    if (delay !== null) { // 만약 delay가 null이 아니라면 
      let id = setInterval(tick, delay); // delay에 맞추어 interval을 새로 실행시킨다.
      return () => clearInterval(id); // unmount될 때 clearInterval을 해준다.
    }
  }, [delay]); // delay가 바뀔 때마다 새로 실행된다.
}

const MomentDateChage = () => {
  const [nowTime, setNowTime] = useState(moment().format('YYYY년 MM월 DD일 HH:mm 시 기준'));

  // useIntervel
  useInterval(() => {
    setNowTime(moment().format('YYYY년 MM월 DD일 HH:mm 시 기준'));
  }, 1000);
  return nowTime;
}

// items 배열에서 stationName과 sidoName만 추출하여 출력
const extractedData = temData.response.body.items.map(item => ({
  stationName: item.stationName,
  sidoName: item.sidoName,
  khaiValue: item.khaiValue,
  khaiGrade : item.khaiGrade,
  pm10Value : item.pm10Value,
  pm10Grade : item.pm10Grade,
  pm25Value : item.pm25Value,
  pm25Grade : item.pm25Grade
  // 여기서 기준 시간도 추가해야할듯
}));

// console.log(extractedData);
// console.log(extractedData[7].sidoName);
// console.log(extractedData[7].stationName);




function MainPage() {
    const firstSelectList = ["서울", "부산", "대구", "인천", "광주", "대전", "울산", "경기", "강원", "충북", "충남", "전북", "전남", "경북", "경남", "제주", "세종"];
    const [firstSelect, setfirstSelect] = useState('');

    const API_KEY = process.env.REACT_APP_API_KEY;

    // json 요청 및 불러오는 함수
    // function requestData() {
    //   axios.get(`http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?stationName=종로구&dataTerm=daily&pageNo=1&numOfRows=10&returnType=json&serviceKey=${API_KEY}&ver=1.4`)
    //     .then((결과) => {
    //       // console.log(결과.data);
    //       console.log(결과.data.response.body.items[0]); //종로구 최신데이터만 출력하기
    //       // 1시간마다 requestData 함수 호출
    //       setInterval(requestData, 1000 * 60 * 60); // 1시간 (1000밀리초 * 60초 * 60분)
    //     })
    //     .catch(() => {
    //       console.log('실패');
    //     });
    // }  


    function requestData() {
      axios.get(`http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?sidoName=서울&pageNo=1&numOfRows=100&returnType=json&serviceKey=${API_KEY}&ver=1.4`)
        .then((결과) => {
          // console.log(결과.data);
          console.log(결과.data); //종로구 최신데이터만 출력하기
          // 1시간마다 requestData 함수 호출
          setInterval(requestData, 1000 * 60 * 60); // 1시간 (1000밀리초 * 60초 * 60분)
        })
        .catch(() => {
          console.log('실패');
        });
    }  
    requestData();  


  return(
    <div className={styles.desktop}>

      {/* 전체 요소 : 크개 3개의 열 묶음으로 이동하게 구성 */}
      <div className={styles.div}>
              {/* 왼쪽 한 묶음 : 네비바 */}
              <div>
                <div className={styles.navbar}>
                    <div className={styles.logodiv}><img src={logoicon} alt="logoimg"/></div>
                    <div className={styles.bottomgroup}>
                      <div className={styles.favdiv}> <img src={favicon} alt="favicon"/></div>
                      <div className={styles.homediv}><img src={homeicon} alt="homeicon"/></div>
                    </div>
                </div>
              </div>

              {/* 중앙 한 묶음 */}
              <div>
                <div style={{display:"flex", flexDirection:"column", gap:"40px"}}>
                    <div className={styles.titlegroup}>
                      <p className={styles.titlelocation}>서울 성동구</p>
                      <div className={styles.titlefavimgdiv}><img className={styles.titlefavimg} src={favicon} alt="titlefavicon"/></div>
                    </div>
  
                  <div style={{display:"flex", flexDirection:"row", gap:"20px"}}>
                    <div>
                      <SelectCom
                        firstSelectList = {firstSelectList}
                      />
                    </div>
                    <div><SelectCom></SelectCom></div>
                  </div>

                  <div style={{display:"flex", marginLeft: "0px"}}><CAIComponent></CAIComponent></div>

                  <div style={{display:"flex", flexDirection:"row", gap:"20px"}}>
                        <div style={{marginTop:"0px", marginLeft:"0px"}}><FineDustcom></FineDustcom></div>
                        <div style={{marginTop:"0px", marginLeft:"0px"}}><UltraDust></UltraDust></div>
                  </div>
                </div>
              </div>

              {/* 오른쪽 한 묶음 */}
              <div>
                <div style={{display:"flex", flexDirection:"column" ,gap:"40px"}}>
                  <div className={styles.currentTime}><p>{MomentDateChage()}</p></div>
                  <div style={{marginTop:"0px", marginLeft:"0px"}}><NoticeCom></NoticeCom></div>
                  <div style={{marginTop:"0px", marginLeft:"0px"}}><MapCom></MapCom></div>
                </div>
              </div>
      </div>
      
    </div>
  )
};

export default MainPage