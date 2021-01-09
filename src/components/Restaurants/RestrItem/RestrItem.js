import React from 'react'
import { Link } from 'react-router-dom'
import classes from './RestrItem.module.scss'

const RestrItem = (props) => {

    return (
        <Link
            to={`/restaurants/${props.el.label}`}
        >
            <div className={classes.Item}>
                <div key={props.index} style={{ width: '100%' }}>
                    <div className={classes.Item_head}>
                        <div className={classes.Item_label}>{props.el.label}</div>
                    </div>
                    <img className={classes.image} src={props.el.image} alt='logo' />
                </div>
            </div>
        </Link>
    )
}

export default RestrItem