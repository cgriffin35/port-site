import React from 'react'
import Image from 'next/image'

interface BannerProps {

}

const Banner: React.FC<BannerProps> = ({}) => {
    return (
      <div id="bannerContainer" className="d-flex justify-content-center align-items-center p-5">
        <div id="bannerBG" className="d-inline-block justify-content-center align-items-center">
          <div className="d-flex justify-content-center align-items-center opacity-100">
            <Image src="/logo.png" alt="CGIII logo" width="251.6" height="332.5" />
            </div>
          <h1 id="bannerTopText" className="display-2" >Welcome! I&#39;m <span id="myName" className="text-white" >Carl Griffin III</span></h1>
          <h4 className="text-light display-6"><strong>Engineer. Entrepreneur.</strong></h4>
          <h6 id="bannerSubtext" className="text-light display-6">Future Physicist.</h6>
        </div>
      </div>
    );
}

export default Banner;