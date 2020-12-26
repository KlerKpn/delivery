import React, { useState } from 'react'
import classes from "./NavBar.module.scss";
import Backdrop from './../../UI/Backdrop/Backdrop';
import { NavLink } from 'react-router-dom';

function NavBar(props) {

    const cls = [classes.NavBar]
    if (!props.menu) {
        cls.push(classes.close)
    }

    const links = [
        { title: 'Главная', path: '/', exact: true },
        { title: 'Рестораны', path: '/hntj', exact: true }
    ]

    return (
        <>
            <div className={cls.join(' ')}>
                <div>
                    <ul>
                        {
                            links.map((element, index) => {
                                return (
                                    <li
                                        key={index}
                                    >
                                        <NavLink
                                            to={element.path}
                                            exact={element.exact}
                                            // className={classes.active}
                                        >
                                            {element.title}
                                        </NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            {
                props.menu
                    ? <Backdrop
                        onClick={props.onToggle}
                    />
                    : null
            }
        </>
    )
}

export default NavBar