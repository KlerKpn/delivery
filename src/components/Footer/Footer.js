import React from 'react'
import classes from './Footer.module.scss'
import Logo from '../../assets/image/Logo';
import AppStore from '../../assets/image/iconAppStore.png'
import GooglePlay from '../../assets/image/iconGooglePlay.png'

const Footer =()=>{
    const cls = [
        'container',
        classes.Column
    ]
    return(
        <footer className={classes.Footer}>
            <div className={cls.join(' ')}>
                <div className={classes.logo}>
                    <Logo />
                </div>
                <div className={classes.About}>
                    ds
                </div>
                <div className={classes.Store}>
                    <img src={AppStore} alt='App Store'/>
                    <img src={GooglePlay} alt='Google Play'/>
                </div>
                <div className={classes.Privacy}>
                    gdf
                </div>
            </div>
        </footer>
    )
}

export default Footer