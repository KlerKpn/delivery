import React from 'react'
import classes from './StashItem.module.scss'

const StashItem = props => {
    console.log(props)
    return (
        <div className={classes.StashItem}>

            <div className={classes.Head}>
                <div className={classes.label}>
                    {props.el.label}
                </div>
                <div className={classes.image}>
                    <img src={props.el.url} alt='' />
                </div>
            </div>
            <div className={classes.counter}>
                <button onClick={() => props.counter(true, props.el.id)}>+</button>
                <div>
                    {props.el.count}
                </div>
                <button onClick={() => props.counter(false, props.el.id)}>-</button>
            </div>
        </div>
    )
}

export default StashItem