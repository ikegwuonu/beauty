import React from 'react'
import css from './Footer.module.css'
import Logo from '../../assets/logo.png'
import {InboxIcon, PhoneIcon, LocationMarkerIcon, LoginIcon, UsersIcon, LinkIcon} from '@heroicons/react/outline'

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
        <hr/>
        <div className={css.cFooter}>
            <div className={css.logo}>
                <img src={Logo} alt="" />
                <span>amazon</span>
            </div>
            <div className={css.block}>
                <div className={css.detail}>
                    <span>Contact Us</span>
                    <span className={css.pngLine}>
                        <LocationMarkerIcon className={css.icon} />
                        <span>111 north avenue Orlando, FL 32901</span>
                    </span>
                </div>
            </div>
            <div className={css.block}>
                <div className={css.detail}>
                    <span>About</span>
                    <span className={css.pngLine}>
                        <LocationMarkerIcon className={css.icon} />
                        <span>111 north avenue Orlando, FL 32901</span>
                    </span>
                </div>
            </div>
            <div className={css.block}>
                <div className={css.detail}>
                    <span>Company</span>
                    <span className={css.pngLine}>
                        <LocationMarkerIcon className={css.icon} />
                        <span>111 north avenue Orlando, FL 32901</span>
                    </span>
                </div>
            </div>
            <div className={css.block}>
                <div className={css.detail}>
                    <span>Resources</span>
                    <span className={css.pngLine}>
                        <LocationMarkerIcon className={css.icon} />
                        <span>111 north avenue Orlando, FL 32901</span>
                    </span>
                </div>
            </div>
            <div className={css.block}>
                <div className={css.detail}>
                    <span>Contact Us</span>
                    <span className={css.pngLine}>
                        <LocationMarkerIcon className={css.icon} />
                        <span>111 north avenue Orlando, FL 32901</span>
                    </span>
                </div>
            </div>
        </div>
        <div className={css.copyRight}>
            <span>Copyright @2024 by Amazon.Inc</span>
            <span>All rights reserved</span>
        </div>
    </div>
  )
}

export default Footer