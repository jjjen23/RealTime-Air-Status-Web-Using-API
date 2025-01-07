import React, { useState, useEffect, useRef } from "react";
import styles from "./style/mainPage.module.css"
import logoicon from "./img/logoicon.png"
import homeicon from "./img/homeicon.png"
import favicon from "./img/favicon.png"
import dropdownicon from "./img/dropdownicon.png"
import CAIComponent from "./components/CAIComponent";
import FineDustcom from "./components/FineDustcom" ;
import UltraDust from "./components/UltraDustCom";
import NoticeCom from "./components/NoticeCom";
import MapCom from "./components/MapCom";
import moment from "moment";
import 'moment/locale/ko';
import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

/* 

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

*/

function MainPage() {

    const firstSelectList = ["서울", "부산", "대구", "인천", "광주", "대전", "울산", "경기", "강원", "충북", "충남", "전북", "전남", "경북", "경남", "제주", "세종"];
    const [secondSelectList, setSecondSelectList] = useState([]); // 하.. 이거 서울만 노가다로 해둘까..?
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [selectedItem1, setSelectedItem1] = useState('서울'); //기본 설정 위치
    const [selectedItem2, setSelectedItem2] = useState('종로구'); //기본 설정 위치

    const [res, setRes] = useState({pm25Value : 0 , pm10Value : 0, khaiValue : 0, khaiGrade : 1}); //이렇게 억지 초기화 가능... 
    let formattedDate = moment(res.dataTime).format("YYYY년 MM월 DD일 HH:mm");

    // useEffect(() => {
    //   // fetchData 함수 내에서 axios.get을 호출하여 데이터를 가져옴
    //   const fetchData = async () => {
    //     try {
    //       const 결과 = await axios.get(`http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?stationName=종로구&dataTerm=daily&pageNo=1&numOfRows=1&returnType=json&serviceKey=${API_KEY}&ver=1.4`);
    //       const item = 결과.data.response.body.items[0];
    //       const extractedData = {
    //         stationName: item.stationName,
    //         khaiValue: item.khaiValue,
    //         khaiGrade: item.khaiGrade,
    //         pm10Value: item.pm10Value,
    //         pm10Grade: item.pm10Grade,
    //         pm25Value: item.pm25Value,
    //         pm25Grade: item.pm25Grade
    //       };
    //       console.log(extractedData); // 데이터가 제대로 가져와졌는지 확인하기 위해 출력
    //       setRes(extractedData); // 데이터를 가져온 후에 setRes 함수를 호출하여 상태를 업데이트
    //     } catch (error) {
    //       console.log('실패', error);
    //     }
    //   };
  
    //   fetchData(); // fetchData 함수 호출
    // }, []); // 빈 배열을 전달하여 컴포넌트가 처음 마운트될 때만 호출되도록 설정
    //------------------------------------------------------------------------------

    //원인은 selectedItem2 비동기 처리 때문 ..!!!! selectedItem2 바뀌어야 props전달 해도 오류 안남 나는데? ㅡㅡ..
    useEffect(() => {
      // fetchData 함수 호출 대신 requestData2 함수 호출
      requestData2(selectedItem2);
    }, [selectedItem2]); 
 
    function requestData1(selectedItem1) {
      axios.get(`http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?sidoName=${selectedItem1}&pageNo=1&numOfRows=100&returnType=json&serviceKey=${API_KEY}&ver=1.4`)
        .then((결과) => {
          console.log(결과.data.response.body.items);
          const newList = 결과.data.response.body.items.map(item => item.stationName);
          setSecondSelectList(newList)
        })

        .catch(() => {
          console.log('실패');
        });
    }   

    //비동기처리 제어 확인용1
    useEffect(() => {
      console.log(secondSelectList);
    }, ["secondSelectList", secondSelectList]);

    //비동기처리 제어 확인용2
    useEffect(() => {
      console.log("res", res);
    }, [res]);

    function requestData2(setSelectedItem2) {
      axios.get(`http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?stationName=${setSelectedItem2}&dataTerm=daily&pageNo=1&numOfRows=1&returnType=json&serviceKey=${API_KEY}&ver=1.4`)
        .then((결과) => {
          const item = 결과.data.response.body.items[0]
          //console.log("tem출력:" , item)
          const extractedData = {
            stationName: item.stationName,
            khaiValue: item.khaiValue,
            khaiGrade: item.khaiGrade,
            pm10Value: item.pm10Value,
            //pm10Grade: item.pm10Grade,
            pm25Value: item.pm25Value,
            //pm25Grade: item.pm25Grade,
            dataTime : item.dataTime
          };
          setRes(extractedData)
        })

        .catch(() => {
          console.log('실패');
        });
    }   

    // 대기 예측 정보API : 대기질 예측모델결과 애니메이션 이미지제공
    // function requestData3() {
    //   axios.get(`http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMinuDustFrcstDspth?searchDate=2024-04-08&returnType=json&serviceKey=${API_KEY}&numOfRows=100&pageNo=1&ver=1.1`)
    //     .then((결과) => {
    //       console.log(결과.data);
    //     })

    //     .catch(() => {
    //       console.log('4실패');
    //     });
    // }   

    //requestData3(); 

    // 시도별 실시간 평균정보 API : 미세먼지, 초미세먼지 평균정보만 있음
    function requestData4() {
      axios.get(`http://apis.data.go.kr/B552584/ArpltnStatsSvc/getCtprvnMesureLIst?itemCode=PM10&dataGubun=HOUR&pageNo=1&numOfRows=1&returnType=json&serviceKey=${API_KEY}`)
        .then((결과) => {
          console.log(결과.data.response.body.items[0]);
        })

        .catch(() => {
          console.log('4:실패');
        });
    }   
    requestData4(); 


    const handleItemClick1 = (item) => {
      setSelectedItem1(item);
      console.log(item)
      setIsOpen1(false);
      requestData1(item)
    };

    const toggleDropdown1 = () => {
      setIsOpen1(!isOpen1);
    };

    const toggleDropdown2 = () => {
      setIsOpen2(!isOpen2);
    };

    const handleItemClick2 = (item) => {
      setSelectedItem2(item);
      console.log(item);
      setIsOpen2(false);
      requestData2(item);
    };



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
                      <p className={styles.titlelocation}>{selectedItem1} {selectedItem2}</p>
                      <div className={styles.titlefavimgdiv}><img className={styles.titlefavimg} src={favicon} alt="titlefavicon"/></div>
                    </div>
  
                  <div style={{display:"flex", flexDirection:"row", gap:"20px"}}>
                    {/* selection1 : 시도 */}
                    <div>
                        <div className={styles.selection1}>
                            <div className={styles.selection1Text}>선택1 dropdown</div>
                            <div className={styles.dropdownWrapper1}>
                              <div className={styles.printitem}>{selectedItem1}</div>
                              <div className={styles.iconwrap} onClick={toggleDropdown1}>
                                <img alt="dropdown1" src={dropdownicon} />
                              </div>
                            </div>

                            {isOpen1 && (
                              <div className={styles.list}>
                                {firstSelectList.map((item, index)=>(
                                  <div className={styles.select} key={index}  onClick={() =>handleItemClick1(item)}>{item}</div>
                                ))}
                              </div>
                            )}
                        </div>
                    </div>
                    
                     {/* selection2 : 관측소선택 */}
                    <div>
                        <div className={styles.selection1}>
                            <div className={styles.selection1Text}>선택2 dropdown</div>
                            <div className={styles.dropdownWrapper1}>
                              <div className={styles.printitem}>{selectedItem2}</div>
                              <div className={styles.iconwrap} onClick={toggleDropdown2}>
                                <img alt="dropdown2" src={dropdownicon} />
                              </div>
                            </div>

                            {isOpen2 && (
                              <div className={styles.list}>
                                {secondSelectList.map((item, index)=>(
                                  <div className={styles.select} key={index}  onClick={() =>handleItemClick2(item)}>{item}</div>
                                ))}
                              </div>
                            )}
                        </div>
                    </div>
                  </div>

                  <div style={{display:"flex", marginLeft: "0px"}}><CAIComponent khaiValue={res.khaiValue}/></div>

                  <div style={{display:"flex", flexDirection:"row", gap:"20px"}}>
                        <div style={{marginTop:"0px", marginLeft:"0px"}}><FineDustcom pm10Value={res.pm10Value}/></div>
                        <div style={{marginTop:"0px", marginLeft:"0px"}}><UltraDust pm25Value={res.pm25Value}/></div>
                  </div>
                </div>
              </div>

              {/* 오른쪽 한 묶음 */}
              <div>
                <div style={{display:"flex", flexDirection:"column" ,gap:"40px"}}>
                  <div className={styles.currentTimediv}><div className={styles.currentTime}>{formattedDate} 시 기준</div></div>
                  <div style={{marginTop:"0px", marginLeft:"0px"}}><NoticeCom khaiGrade={res.khaiGrade}/></div>
                  <div style={{marginTop:"0px", marginLeft:"0px"}}><MapCom></MapCom></div>
                </div>
              </div>
      </div>
      
    </div>
  )
};

export default MainPage