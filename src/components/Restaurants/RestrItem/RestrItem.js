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
                    <div className={classes.label}>{props.el.label}</div>
                    <img className={classes.url} src={props.el.image} alt='' />
                </div>
            </div>
        </Link>
    )
}

export default RestrItem