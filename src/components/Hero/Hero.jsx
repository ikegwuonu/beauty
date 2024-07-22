import React from 'react'
import css from './Hero.module.css'
import heroimg from '../../assets/hero.png'
import {RiShoppingBagFill} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs'
import {motion} from 'framer-motion'

export const Hero = () => {
    const transition={duration:3, type:'spring'}
  return (
    <div className={css.container}>
        {/* left side */}
        <div className={css.h_sides}>
            <span className={css.text1}>skin protection cream</span>
            <div className={css.text2}>
                <span>Trendy collection</span>
                <span>Seedily say has suitable disposal and bo. exercise joy man children</span>
            </div>

        </div>

        {/* middle hero img */}
        <div className={css.wrapper}>
            <motion.div className={css.blueCircle}
                initial={{bottom:'2rem'}}
                whileInView={{bottom:'0rem'}}
                transition={transition}>
            
            </motion.div>
            <motion.img 
                transition={transition}
                initial={{bottom:'-2rem'}}
                whileInView={{bottom:'0rem'}}
                src={heroimg} width={600} alt="" />

            {/* cart div animate*/}
            <motion.div 
                transition={transition}
                initial={{right:'4%'}}
                whileInView={{right:'2%'}}
                className={css.cart2}>
                <RiShoppingBagFill/>
                <div className={css.signup}>
                    <span>Best signup offers</span>
                    <BsArrowRight/>
                </div>
                
            </motion.div>
        </div>
        {/* right side */}
        <div className={css.h_sides}>
            <div className={css.traffic}>
                <span>1.5m</span>
                <span>monthly offer</span>
            </div>
            <div className={css.customers}>
                <span>100k</span>
                <span>happy customers</span>
            </div>
        </div>
    </div>
  )
}
