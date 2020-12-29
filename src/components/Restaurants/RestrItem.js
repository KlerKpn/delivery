import React from 'react'
import classes from './RestrItem.module.scss'


const Item = (props) => {
    return (
        <div className={classes.Item}>
            <div key={props.index} style={{width: '100%'}}>
                <div className={classes.label}>{props.el.label}</div>
                <img className={classes.url} src={props.el.image} alt='' />
            </div>
        </div>
    )
}

export default Item