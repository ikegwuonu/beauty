import React, { useState } from 'react'
import css from './Header.module.css'
import logo from '../../assets/logo.png'
import {CgShoppingBag} from 'react-icons/cg'
import {GoStop} from 'react-icons/go'

const Header = () => {
    const [showMenu, setShowMenu]=useState(true)
    const toggleMenu=()=>{
        setShowMenu((showMenu)=>!showMenu)
    }
  return (
    <div className={css.container}>
        <div className={css.logo}>
            <img src={logo} alt="" className={css.img} />
            <span>amazon</span>
        </div>
        <div className={css.right}>
            <div className={css.bars} onClick={toggleMenu}>
                <GoStop/>
            </div>
            <div >
                <ul className={css.menu} style={{display:showMenu?'flex':'none'}}>
                    <li>Collection</li>
                    <li>Brand</li>
                    <li>New</li>

                </ul>
            </div>
            <input type='text' className={css.search} placeholder='Search' />
            <CgShoppingBag className={css.cart}/>
        </div>
    </div>
  )
}

export default Header