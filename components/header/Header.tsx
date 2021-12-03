import React from 'react'
import head from 'next/head';

import { contact } from '../../lib';

import { FaShoppingCart } from 'react-icons/fa';
import { BsPersonFill } from 'react-icons/bs';


const Header = () => {

    return (
        <div className="flex header">
            <div className="w-6/12 header-contact">
                {contact.length===0
                    ?null
                    :(
                        <div className="flex pl-36 py-2">
                            {
                                contact.map((item,index)=>{
                                    return  <div key={index} className="pr-4 hover:opacity-80 header-hover">
                                                {item.title}
                                            </div>
                                })
                            }
                        </div>
                    )}
            </div>
            <div className="w-6/12 flex justify-center header-cart pl-48 header-hover">
                <div className="flex  py-2 hover:opacity-50">
                    <div className="pt-0.5"><BsPersonFill style={{color:"#1d96bb"}}/></div>
                    <div >MY ACCOUNT</div>    
                </div>

                <div className="flex  py-2 pl-8 hover:opacity-80 header-hover">
                    <div className="pt-0.5"><FaShoppingCart  style={{color:"#1d96bb"}}/></div>
                    <div>MY CART</div>           
                </div>
            </div>
        </div>
    )
}

export default Header
