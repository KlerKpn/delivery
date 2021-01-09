import React from 'react'
import classes from './Footer.module.scss'
import Logo from '../../assets/image/Logo';
import AppStore from '../../assets/image/iconAppStore.png'
import GooglePlay from '../../assets/image/iconGooglePlay.png'

const Footer = () => {
    const cls = [
        'container',
        classes.Column
    ]
    return (
        <footer className={classes.Footer}>
            <div className={cls.join(' ')}>
                <div className={classes.logo}>
                    <Logo />
                </div>
                <div className={classes.About}>
                    <div className={classes.Footer_column}>
                        <select defaultValue='Russian'>
                            <option value='Russian'>Russian</option>
                            <option value='English'>English</option>
                        </select>
                        <div>

                        </div>
                    </div>
                    <div className={classes.Footer_column}>
                        <ul>
                            <li>
                                About Eats
                            </li>
                            <li>
                                Become a Delivery Partner
                            </li>
                            <li>
                                Become a Restaurant Partner
                            </li>
                        </ul>
                    </div>
                    <div className={classes.Footer_column}>
                        <ul>
                            <li>
                                See all cities
                            </li>
                            <li>
                                Pricing
                            </li>
                            <li>
                                Help
                            </li>
                            <li>
                               FAQs
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={classes.Store}>
                    <img src={AppStore} alt='App Store' />
                    <img src={GooglePlay} alt='Google Play' />
                </div>
                <div className={classes.Privacy}>
                    <div className={classes.Privacy_block}>2021 KlerKpn Technologies Inc.</div>
                    <div className={classes.Privacy_block}>Privacy</div>
                    <div className={classes.Privacy_block}>github.com/KlerKpn</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer