import axios from 'axios';
import React from 'react';
import { RenderAfterNavermapsLoaded, NaverMap } from 'react-naver-maps'; // 패키지 불러오기
import Head from "next/head";

function Test() {
    
  return (
    <RenderAfterNavermapsLoaded
        //clientId={process.env.NAVER_CLIENT_ID}
        // Naver Cloud Platform 유저의 경우 props.clientId 대신 props.ncpClientId를 사용합니다. 
        ncpClientId={process.env.NAVER_CLIENT_ID}
    >
        <NaverMap
            mapDivId={'react-naver-map'} // default: react-naver-map
            style={{
                width: '100%', // 네이버지도 가로 길이
                height: '85vh' // 네이버지도 세로 길이
            }}
            defaultCenter={{ lat: 37.554722, lng: 126.970833 }} // 지도 초기 위치
            defaultZoom={13} // 지도 초기 확대 배율
        />
    </RenderAfterNavermapsLoaded>
  );
}

export default Test;

//export async function getServerSideProps(){
    // const searchResults = await fetch("http://61.76.161.27:8088/webZoneTodayVisit")
    //     .then((res) => res.json());

    // const searchResults = await axios({
    //     method : "post",
    //     url : `${process.env.host}/getZoneTodayVisit`,
    //     data : {
    //         zoneid : "1881"
    //     }
    // })
    // .then((res) => {
    //     return res.data.data
    // })

    // return {
    //     props: {
    //         searchResults : searchResults,
    //     }
    // }
//}