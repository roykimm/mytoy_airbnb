import React from 'react';
import favicon from "../public/vercel.svg"
import Image from "next/image";

function Header() {
  return (
    <>
    <div className="flex">
        <div className="flex">로고</div>
        <div>고성관광지</div>
        <div className="ml-auto">
            <button>테스트</button>
        </div>
    </div>
    <header
        className="sticky top-0 bg-white shadow-md p-5 grid grid-cols-3" 
    >
        <div
            className="relative flex items-center h-10 cursor-pointer my-auto"
        >
            <Image 
                src="http://links.papareact.com/qd3"
                layout="fill"
                objectFit="contain"
                objectPosition="left"
            />
            
        </div>
        <div className="flex items-center">
            <p>고성 방문객 분석 시스템</p>
        </div>
    </header>
    </>
  );
}

export default Header;
