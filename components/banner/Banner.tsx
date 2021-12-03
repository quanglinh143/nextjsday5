import React from 'react';
import {RiArrowDropDownLine} from "react-icons/ri"
export const bannerData=[
    {
        title:"FEATURED",
        details:[
            {detail:"#1 Mega Menu"},{detail:"#2 Request For Quote Pro"},{detail:"#3 Marketplace"},{detail:"#4 Form Builder"},{detail:"#5 Reward Points"}
        ]
    },
    {
        title:"M2 EXTENSIONS",
        details:[
            {detail:1},{detail:2},{detail:3}
        ]
    },
    {
        title:"MARKETPLACE",
        details:[
            {detail:1},{detail:2},{detail:3}
        ]
    },
    {
        title:"NEW FREE",
        details:[
            {detail:1},{detail:2},{detail:3}
        ]
    },
    {
        title:"THEMES",
        details:[
            {detail:1},{detail:2},{detail:3}
        ]
    },
    {
        title:"Deals & Packages",
        details:[
            {detail:1},{detail:2},{detail:3}
        ]
    },
    {
        title:"SERVICES",
        details:[
            {detail:1},{detail:2},{detail:3}
        ]
    },
    {
        title:"SUPPORT",
        details:[
            {detail:1},{detail:2},{detail:3}
        ]
    },
] 
const Banner = () => {
    console.log("bannerData",{bannerData});
    return (
        <div className="banner flex justify-center">
            <div className="flex justify-evenly w-9/12">
                {bannerData.map((item,index)=>{
                    return  <div className="flex"  key={index}>
                                <div className="banner-hover flex">
                                <div>{item.title}</div> <label className="pt-0.5 pl-1"><RiArrowDropDownLine style={{fontSize:"20px"}} /></label>
                                </div>
                                <div className="banner-details">
                                    {item.details.map((item,index)=>{
                                        return  <div key={index} className="banner-details-item">
                                                    {item.detail}
                                                </div>
                                    })}
                                </div>
                            </div>
                })}
            </div>
        </div>
    )
}

export default Banner
