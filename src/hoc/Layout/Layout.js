import React, { useState } from 'react'
import classes from './Layout.module.scss'
import NavBar from './../../components/Navigation/NavBar/NavBar';
import MenuToggle from './../../components/Navigation/MenuToggle/MenuToggle';
import Footer from '../../components/Footer/Footer';



const Layout = props => {

    const [menu, setMenu] = useState(false)

    function handleMenu() {
        setMenu(prev => !prev)
    }

    return (
        <div className={classes.Layout}>
            <NavBar
                menu={menu}
                onToggle={handleMenu}
            />
            <MenuToggle
                menu={menu}
                onToggle={handleMenu}
            />
            <main
                className='container'
                style={{margin: '80px auto'}}
            >
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout