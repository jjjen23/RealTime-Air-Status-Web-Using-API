import React from "react";
import styles from "../style/mapCom.module.css"
import { Map, MarkerClusterer, CustomOverlayMap, useKakaoLoader } from 'react-kakao-maps-sdk';
import axios from "axios";

function MapCom() {
  return(
    <div className={styles.topbox}>
      <div className={styles.mapbox}>
        <div className={styles.title}>국내 대기오염 현황</div>
        <div className={styles.map}>
          <Map
             // 지도의 중심좌표
            center={{
              lat: 37.5642135,
              lng: 127.0016985,
            }}
            // 지도의 크기
            style={{
              width: "100%",
              height: "100%",
              borderRadius: '10px'
            }}
            // 지도의 확대 레벨(기존3)
            level={13}
          >

          </Map>
        </div>
      </div>
    </div>
  )
};

export default MapCom;