import React from 'react'
import { FaShieldAlt,FaRegLifeRing } from 'react-icons/fa';
import {BiRefresh,BiSearch} from "react-icons/bi"
const Logo = () => {
    return (
        <div className="logo flex justify-around">
            <div className="pt-6"><img src="https://landofcoder.com/skin/frontend/venustheme/default/images/logo.png" /></div>
            <div className="logo-title flex pl-56">
                <div className="logo-title--1 pt-4 flex">
                    <div className="logo-title--icon pt-4">
                        <FaShieldAlt style={{color:"#f1703d",fontSize:"22px"}} />
                    </div>
                    <div className="logo-title-i4 pl-2">
                        <div className="logo-title-i4--bold pt-4" style={{fontSize:"12px",fontWeight:"600",paddingBottom:"6px",marginTop:"-4px"}}>30 DAYS</div>
                        <div className="logo-title-i4--text " style={{marginTop:"-8px",fontSize:"11px"}}>MONEY BACK</div>
                    </div>
                </div>
                <div className="vertical"></div>
                <div className="logo-title--2 pt-4 flex">
                    <div className="logo-title--icon pt-4">
                        <FaRegLifeRing style={{color:"#f1703d",fontSize:"22px"}} />
                    </div>
                    <div className="logo-title-i4 pl-2">
                        <div className="logo-title-i4--bold pt-4" style={{fontSize:"12px",fontWeight:"600",paddingBottom:"6px",marginTop:"-4px"}}>30 DAYS</div>
                        <div className="logo-title-i4--text " style={{marginTop:"-8px",fontSize:"11px"}}>MONEY BACK</div>
                    </div>
                </div>
                <div className="vertical"></div>
                <div className="logo-title--3 pt-4 flex">
                    <div className="logo-title--icon pt-4">
                        <BiRefresh style={{color:"#f1703d",fontSize:"26px"}} />
                    </div>
                    <div className="logo-title-i4 pl-2">
                        <div className="logo-title-i4--bold pt-4" style={{fontSize:"12px",fontWeight:"600",paddingBottom:"6px",marginTop:"-4px"}}>30 DAYS</div>
                        <div className="logo-title-i4--text " style={{marginTop:"-8px",fontSize:"11px"}}>MONEY BACK</div>
                    </div>
                </div>
            </div>
            <div className="logo-search pr-20">
                <input 
                    className="border border-transparent focus:outline-none focus:ring-1 focus:ring-black focus:border-transparent mt-6 logo-input" 
                    style={{background:"#f1f1f1",borderRadius:"20px",height:"40px",border:"1px solid rgba(34, 34, 34, 0.15)"}}
                    placeholder="Search here...."
                />
                <div className="logo-input--search"><BiSearch/></div>
            </div>
        </div>
    )
}

export default Logo
